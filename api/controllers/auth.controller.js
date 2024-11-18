const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const BadRequestException = require("../../exceptions/bad-requests");
const {
  signupErrors,
  serverErrors,
  loginErrors,
} = require("../../exceptions/status-codes");
require("dotenv").config({ path: "../../.env" });
const { PrismaClient } = require("../../prisma/generated/api-client");
const ServerErrorException = require("../../exceptions/server-error");
const sendActivationMail = require("../../functions/sendActivationEmail");
const sendResetMail = require("../../functions/sendResetMail");
const prisma = new PrismaClient({ log: ["warn", "error"] });

// Utility function to validate email format
const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    throw new BadRequestException(
      "Invalid email address provided",
      signupErrors.INVALID_EMAIL_PATTERN
    );
  }
};

// Utility function to validate required fields
const validateRequiredFields = (fields) => {
  const emptyFields = fields
    .filter((field) => !field.value)
    .map((field) => field.name);
  if (emptyFields.length) {
    throw new BadRequestException(
      `${emptyFields.join(", ")} fields required`,
      loginErrors.INCOMPLETE_LOGIN_CREDENTIALS
    );
  }
};

// API login
const login = async (req, res) => {
  const { email, password } = req.body;
  validateRequiredFields([
    { name: "Email", value: email },
    { name: "Password", value: password },
  ]);

  validateEmail(email);

  // Check if company exists
  const companyExists = await prisma.company.findFirst({
    where: { email: email.toLowerCase() },
  });

  if (!companyExists) {
    throw new BadRequestException(
      "Cannot find Company Account",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  // Compare passwords
  if (!bcrypt.compareSync(password, companyExists.password)) {
    throw new BadRequestException(
      "Incorrect login credentials",
      loginErrors.INCORRECT_PASSWORD
    );
  }

  const token = jwt.sign(
    {
      id: companyExists.id,
    },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  const { password: companyPass, ...others } = companyExists;

  // Check if company's account is active
  if (!companyExists.isActive) {
    return res.status(401).json({
      message: "Company account not active",
      errorCode: loginErrors.USER_INACTIVE,
      company: {
        id: companyExists.id,
        companyId: companyExists.companyId,
        companyName: companyExists.companyName,
        email: companyExists.email,
      },
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Login successful",
    company: others,
    token,
  });
};

// API signup
const signup = async (req, res) => {
  const { companyName, email, companyId, password } = req.body;

  validateRequiredFields([
    { name: "Company Name", value: companyName },
    { name: "Email", value: email },
    { name: "Company ID", value: companyId },
    { name: "Password", value: password },
  ]);

  validateEmail(email);

  //   Check if company with same id exists
  const companyWithIdExists = await prisma.company.findFirst({
    where: {
      companyId,
    },
  });

  if (companyWithIdExists)
    throw new BadRequestException(
      "Company with ID already exists",
      signupErrors.COMPANY_ALEADY_EXISTS
    );

  //   Check if company with same id exists
  const companyWithEmailExists = await prisma.company.findFirst({
    where: {
      email,
    },
  });

  if (companyWithEmailExists)
    throw new BadRequestException(
      "Company with email already exists",
      signupErrors.COMPANY_ALEADY_EXISTS
    );

  // encrypt password
  const encryptedPassword = bcrypt.hashSync(password.trim(), 10);
  //   Create account
  try {
    const newCompany = await prisma.company.create({
      data: {
        companyId,
        companyName,
        password: encryptedPassword,
        email: email.toLowerCase(),
      },
    });

    // Send activation url to email
    const token = jwt.sign(
      { companyId: newCompany.id, email: newCompany.email },
      process.env.JWT_KEY,
      {
        expiresIn: "30m",
      }
    );

    const url = `https://api.vettme.ng/auth/activate/${token}`;
    sendActivationMail(newCompany.email, url);

    res.status(201).json({
      status: "success",
      message: "Company account created successfully",
    });
  } catch (err) {
    throw new ServerErrorException(
      "Unable to create account",
      serverErrors.UNKNOWN_ERROR
    );
  }
};

// API Activate account
const activateAccount = async (req, res) => {
  const { token } = req.body;

  validateRequiredFields([{ name: "Token", value: token }]);

  let tokenData;
  try {
    tokenData = jwt.verify(token, process.env.JWT_KEY);
  } catch (err) {
    throw new ServerErrorException(
      "Activation link invalid or expired",
      null,
      err
    );
  }

  const { email, companyId } = tokenData;

  const foundCompany = await prisma.company.findFirst({
    where: {
      id: companyId,
      email,
    },
  });

  if (!foundCompany) {
    throw new BadRequestException(
      "Cannot find Company Account",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  if (foundCompany && foundCompany.isActive) {
    return res.status(202).json({
      status: true,
      message: "Company account already activated",
    });
  }

  const activatedAccount = await prisma.company.update({
    where: {
      id: companyId,
      email,
    },
    data: {
      isActive: true,
    },
    omit: {
      password: true,
    },
  });

  res.status(200).json({
    status: true,
    message: "Company account activated successfully",
    company: activatedAccount,
  });
};

// API request new activation link
const requestLink = async (req, res) => {
  const { token } = req.body;

  validateRequiredFields([{ name: "Token", value: token }]);

  let tokenData;

  try {
    tokenData = jwt.decode(token, process.env.JWT_KEY);
  } catch (err) {
    throw new BadRequestException(
      "Activation URL malformed.",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  if (!tokenData) {
    throw new BadRequestException(
      "Activation URL malformed",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  const { email, companyId } = tokenData;

  const foundCompany = await prisma.company.findFirst({
    where: {
      id: companyId,
      email,
    },
  });

  if (!foundCompany) {
    throw new BadRequestException(
      "Cannot find company account",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  if (foundCompany.isActive) {
    return res.status(409).json({
      status: false,
      message: "Company account already activated",
    });
  }

  const newToken = jwt.sign(
    { companyId: foundCompany.id, email: foundCompany.email },
    process.env.JWT_KEY,
    {
      expiresIn: "30m",
    }
  );

  const url = `https://api.vettme.ng/auth/activate/${newToken}`;
  sendActivationMail(foundCompany.email, url);

  res.status(200).json({
    status: true,
    message: "A new activation link has been sent",
  });
};

// API forgot password
const forgotPassword = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    throw new BadRequestException(
      "Company email or id required",
      loginErrors.INCOMPLETE_LOGIN_CREDENTIALS
    );
  }

  let foundCompany;

  // Find company account
  const foundCompanyWithId = await prisma.company.findFirst({
    where: {
      companyId: data,
    },
  });
  if (foundCompanyWithId) {
    foundCompany = foundCompanyWithId;
  } else {
    const foundCompanyWithEmail = await prisma.company.findFirst({
      where: {
        email: data,
      },
    });

    if (foundCompanyWithEmail) {
      foundCompany = foundCompanyWithEmail;
    } else {
      foundCompany = null;
    }
  }

  if (foundCompany === null) {
    throw new BadRequestException(
      "Cannot find company account",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  // Send password reset url to email
  const token = jwt.sign(
    { companyId: foundCompany.id, email: foundCompany.email },
    process.env.JWT_KEY,
    {
      expiresIn: "5m",
    }
  );

  const url = `https://api.vettme.ng/auth/reset-password/${token}`;
  sendResetMail(foundCompany.email, url);

  return res.status(200).json({
    status: "success",
    message: "Recovery URL sent",
  });
};

// API reset password
const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  validateRequiredFields([
    {
      name: "Token",
      value: token,
    },
    {
      name: "New Password",
      value: newPassword,
    },
  ]);

  // Get info from token
  let tokenData;

  try {
    tokenData = jwt.verify(token, process.env.JWT_KEY);
  } catch (err) {
    throw new BadRequestException(
      "Invalid password reset URL.",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  if (!tokenData) {
    throw new BadRequestException(
      "Password reset URL malformed",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  const { email, companyId } = tokenData;

  // Find company with token data
  const foundCompany = await prisma.company.findFirst({
    where: {
      id: companyId,
      email,
    },
  });

  if (!foundCompany) {
    throw new BadRequestException(
      "Company account not found",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  // Encrypt new password
  const encryptedPassword = bcrypt.hashSync(newPassword.trim(), 10);

  // Update user password in database
  try {
    const updatedCompany = await prisma.company.update({
      where: {
        id: companyId,
        email,
      },
      data: {
        password: encryptedPassword,
      },
    });

    if (!updatedCompany) {
      throw new ServerErrorException(
        "Cannot update compamy password. Please retry",
        500,
        err
      );
    }

    return res.status(200).json({
      status: "success",
      message: "Company password reset successful",
    });
  } catch (err) {
    throw new ServerErrorException(
      "Cannot update compamy password. Please retry",
      500,
      err
    );
  }
};
module.exports = {
  login,
  signup,
  activateAccount,
  requestLink,
  forgotPassword,
  resetPassword,
};
