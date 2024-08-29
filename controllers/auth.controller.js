const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../.env" });
const { PrismaClient } = require("@prisma/client");
const sendotp = require("../functions/sendotp");
const createOtp = require("../functions/createotp");
const verifyUser = require("../functions/verifyUser");
const findUser = require("../functions/findUser");
const BadRequestException = require("../exceptions/bad-requests");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const ServerErrorException = require("../exceptions/server-error");
const {
  loginErrors,
  signupErrors,
  otpErrors,
  verificationErrors,
} = require("../exceptions/status-codes");
const verifyUserId = require("../functions/verifyUserId");
const validatePassword = require("../functions/validatePassword");

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

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  validateRequiredFields([
    { name: "Email", value: email },
    { name: "Password", value: password },
  ]);

  validateEmail(email);

  const user = await findUser({ email });

  // Compare passwords
  if (!bcrypt.compareSync(password, user.password)) {
    throw new BadRequestException(
      "Incorrect login credentials",
      loginErrors.INCORRECT_PASSWORD
    );
  }

  if (!user.isActive) {
    throw new UnauthorizedRequestException(
      "User account not activated. Activate account with OTP",
      loginErrors.USER_INACTIVE
    );
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
    expiresIn: "4h",
  });
  const { password: userPassword, ...userData } = user;

  return res.status(200).json({
    status: "success",
    message: "User logged in successfully",
    user: userData,
    token,
  });
};

// Sign up
const signup = async (req, res) => {
  const { full_name, email, phone_number, password, nin } = req.body;

  validateRequiredFields([
    { name: "Full Name", value: full_name },
    { name: "Email", value: email },
    { name: "Phone Number", value: phone_number },
    { name: "Password", value: password },
    { name: "NIN", value: nin },
  ]);

  const fullNamePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  if (!full_name.match(fullNamePattern)) {
    throw new BadRequestException(
      "Only letters are allowed for full name input",
      signupErrors.INVALID_EMAIL_PATTERN
    );
  }

  validateEmail(email);

  const ninPattern = /^\d{11}$/;
  if (!nin.match(ninPattern)) {
    throw new BadRequestException(
      "Invalid NIN provided",
      signupErrors.INVALID_NIN_PATTERN
    );
  }

  const phoneNumberPattern = /^\d{11}$/;
  if (!phone_number.match(phoneNumberPattern)) {
    throw new BadRequestException(
      "A valid 11 digits phone number is required",
      signupErrors.INVALID_PHONE_NUMBER_PATTERN
    );
  }

  const userWithEmailExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userWithEmailExists) {
    throw new BadRequestException(
      "User with email already exists",
      signupErrors.USER_WITH_EMAIL_ALREADY_EXISTS
    );
  }

  const userWithPhoneNumberExists = await prisma.user.findUnique({
    where: { phone_number },
  });
  if (userWithPhoneNumberExists) {
    throw new BadRequestException(
      "User with phone number already exists",
      signupErrors.USER_WITH_PHONE_NUMBER_ALREADY_EXISTS
    );
  }

  // Match password requirement
  const passwordRequirementMatched = validatePassword(password);

  if (!passwordRequirementMatched) {
    throw new BadRequestException(
      "Password must contain at least one uppercase letter, lowercase letter, number and special character.",
      loginErrors.PASSWORD_MISMATCH
    );
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: full_name,
      email,
      phone_number,
      nin,
      password: encryptedPassword,
    },
  });

  const otp = await createOtp(newUser.id);
  sendotp(newUser.email, "Complete your Vettme account creation", otp);

  const { password: newUserPassword, ...newUserData } = newUser;
  return res.status(201).json({
    status: "success",
    message: "Account created successfully",
    user: newUserData,
  });
};

// Resend OTP
const resendOtp = async (req, res) => {
  const { userId } = req.body;
  verifyUserId(userId);

  const user = await findUser({ id: userId });

  if (user.isActive) {
    throw new BadRequestException(
      "User is already active",
      otpErrors.USER_ALREADY_ACTIVE
    );
  }

  const otp = await createOtp(userId);
  sendotp(user.email, "Complete your Vettme account creation", otp);

  return res.status(200).json({
    status: "success",
    message: "New OTP has been sent to user email",
  });
};

// Verify OTP
const verifyOtp = async (req, res) => {
  const { userId, otp } = req.body;
  verifyUserId(userId);

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user)
    throw new UnauthorizedRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );

  const otpExists = await prisma.otp.findFirst({
    where: {
      userId,
      otp: parseInt(otp),
    },
  });

  if (!otpExists || otpExists.used) {
    throw new BadRequestException(
      "Invalid or used otp provided",
      otpErrors.INVALID_OTP
    );
  }

  await prisma.user.update({
    where: { id: userId },
    data: { isActive: true },
  });

  await prisma.otp.update({
    where: {
      id: otpExists.id,
    },
    data: { used: true },
  });

  return res.status(200).json({
    status: "success",
    message: "OTP verification successful",
  });
};

// Verify user data
const verifyUserData = async (req, res) => {
  const { userId } = req.body;
  verifyUserId(userId);

  const user = await findUser({ id: userId });
  const userDataMatch = await verifyUser(userId);

  if (!userDataMatch) {
    throw new UnauthorizedRequestException(
      "User data does not match NIN data",
      verificationErrors.USER_DATA_MISMATCH
    );
  }

  const userVerified = await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true },
  });

  if (!userVerified) {
    throw new ServerErrorException(
      "User cannot be verified. Please retry",
      verificationErrors.DATABASE_VERIFICATION_ERROR,
      null
    );
  }

  return res.status(200).json({
    status: "success",
    message: "User verified successfully",
  });
};

// Get user with email
const getUserWithEmail = async (req, res) => {
  const { email } = req.body;

  const user = await findUser({ email });

  const otp = await createOtp(user.id);
  sendotp(user.email, "Complete your Vettme account recovery", otp);

  return res.status(200).json({
    status: "success",
    message: "Recovery OTP sent to email",
    userId: user.id,
  });
};

// Resend Recovery OTP
const resendRecoveryOtp = async (req, res) => {
  const { userId } = req.body;
  verifyUserId(userId);

  const user = await findUser({ id: userId });

  const otp = await createOtp(userId);

  sendotp(user.email, "Complete your Vettme account recovery", otp);

  return res.status(200).json({
    status: "success",
    message: "New OTP has been sent to user email",
  });
};

// Reset Password
const resetPassword = async (req, res) => {
  const { userId, otp, password } = req.body;
  verifyUserId(userId);

  await findUser({ id: userId });

  const otpExists = await prisma.otp.findFirst({
    where: {
      userId: userId,
      otp: parseInt(otp),
    },
  });

  if (!otpExists || otpExists.used) {
    throw new BadRequestException(
      "Invalid or used otp provided",
      otpErrors.INVALID_OTP
    );
  }

  const encryptedPassword = bcrypt.hashSync(password, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password: encryptedPassword },
  });

  await prisma.otp.update({
    where: { id: otpExists.id },
    data: { used: true },
  });

  return res.status(200).json({
    status: "success",
    message: "Password updated successfully",
  });
};

module.exports = {
  verifyOtp,
  signup,
  login,
  resendOtp,
  verifyUserData,
  getUserWithEmail,
  resendRecoveryOtp,
  resetPassword,
};
