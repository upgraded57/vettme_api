const BadRequestException = require("../../exceptions/bad-requests");
const ServerErrorException = require("../../exceptions/server-error");
const {
  serverErrors,
  signupErrors,
  loginErrors,
  apiErrors,
  verificationErrors,
} = require("../../exceptions/status-codes");
const { PrismaClient } = require("../../prisma/generated/api-client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

// Utility function to remove empty fields
const removeEmptyFields = (rawUpdateData) => {
  return Object.fromEntries(
    Object.entries(rawUpdateData).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  );
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

const getCompany = async (req, res) => {
  const company = req.company;
  return res.status(200).json({
    status: "success",
    message: "Company data fetched successfully",
    company,
  });
};

const getAllCompanies = async (req, res) => {
  try {
    // Fetch all companies from the database
    const companies = await prisma.company.findMany();

    // Fetching all comapanies without the passwords
    const companiesWithoutPassword = companies.map(({ password, ...others }) => others);
    console.log(companiesWithoutPassword);

    // Send a successful response with companies data
    return res.status(200).json({
      status: "success",
      message: "All companies data have been fetched",
      companiesWithoutPassword,
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching companies:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching companies data",
      error: error.message,
    });
  }
};


const updateCompanyInfo = async (req, res) => {
  const company = req.company;
  const { companyName, companyEmail, companyPhone } = req.body;
  let companyEmailToLowerCase;

  if (!companyName && !companyEmail && !companyPhone) {
    throw new BadRequestException(
      "Update data not provided",
      apiErrors.UPDATE_DATA_NOT_PROVIDED
    );
  }

  if (companyEmail) {
    companyEmailToLowerCase = companyEmail.toLowerCase();
    validateEmail(companyEmailToLowerCase);
  }

  const phoneNumberPattern = /^\d{11}$/;
  if (companyPhone && !companyPhone.match(phoneNumberPattern)) {
    throw new BadRequestException(
      "A valid 11 digits phone number is required",
      signupErrors.INVALID_PHONE_NUMBER_PATTERN
    );
  }

  const updateData = removeEmptyFields({
    companyName,
    email: companyEmailToLowerCase,
    phone_number: companyPhone,
  });

  try {
    const updatedCompany = await prisma.company.update({
      where: {
        id: company.id,
      },
      data: {
        ...updateData,
      },
      omit: {
        password: true,
      },
    });

    if (!updatedCompany) {
      throw new ServerErrorException(
        "Unable to update company data",
        null,
        null
      );
    }

    return res.status(200).json({
      status: "success",
      message: "Company information updated successfully",
      company: updatedCompany,
    });
  } catch (err) {
    throw new ServerErrorException(
      "Something went wrong. Please retry",
      serverErrors.UNKNOWN_ERROR,
      err
    );
  }
};

const updateCompanyPassword = async (req, res) => {
  const company = req.company;
  const { oldPassword, newPassword } = req.body;

  validateRequiredFields([
    {
      name: "Old Password",
      value: oldPassword,
    },
    {
      name: "New Password",
      value: newPassword,
    },
  ]);

  const foundCompany = await prisma.company.findFirst({
    where: {
      id: company.id,
    },
  });

  // Compare old password to company password in db
  const oldPasswordIsCorrect = bcrypt.compareSync(
    oldPassword,
    foundCompany.password
  );

  if (!oldPasswordIsCorrect) {
    throw new BadRequestException(
      "Old passwords do not match",
      verificationErrors.OLD_PASSWORD_MISMATCH
    );
  }

  try {
    // Update user password
    const updatedCompany = await prisma.company.update({
      where: { id: foundCompany.id },
      data: {
        password: bcrypt.hashSync(newPassword, 10),
      },
      omit: {
        password: true,
      },
    });

    if (!updatedCompany) {
      throw new ServerErrorException(
        "Unable to update company password",
        serverErrors.UNKNOWN_ERROR,
        null
      );
    }

    return res.status(200).json({
      status: "success",
      message: "Company password updated successfully",
    });
  } catch (err) {
    throw new ServerErrorException(
      "Unable to update company password",
      null,
      err
    );
  }
};
module.exports = { getCompany, getAllCompanies, updateCompanyInfo, updateCompanyPassword };
