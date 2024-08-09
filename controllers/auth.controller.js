const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const sendotp = require("../functions/sendotp");
const BadRequestException = require("../exceptions/bad-requests");
const {
  loginErrors,
  signupErrors,
  otpErrors,
  verificationErrors,
} = require("../exceptions/status-codes");
const createOtp = require("../functions/createotp");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const verifyUser = require("../functions/verifyUser");
const ServerErrorException = require("../exceptions/server-error");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Login
const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailPattern)) {
    throw new BadRequestException(
      "Invalid email address provided",
      signupErrors.INVALID_EMAIL_PATTERN
    );
  }

  // check if login info were provided
  const emptyRequests = [];
  if (!email) emptyRequests.push("Email");
  if (!password) emptyRequests.push("Password");
  if (!email || !password)
    throw new BadRequestException(
      `${emptyRequests.join(",")} fields required`,
      loginErrors.INCOMPLETE_LOGIN_CREDENTIALS
    );

  // Checks if user with email already exist
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    throw new BadRequestException(
      "Incorrect login credentials",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  // Check if password is correct
  const userPasswordIsCorrect = bcrypt.compareSync(password, user.password);

  if (!userPasswordIsCorrect) {
    throw new BadRequestException(
      "Incorrect login credentials",
      loginErrors.INCORRECT_PASSWORD
    );
  }

  // Check if user is active
  if (!user.isActive)
    new UnauthorizedRequestException(
      "User account not activated. Activate account with OTP",
      loginErrors.USER_INACTIVE
    );

  // Check if user is verified
  // if (!user.isVerified)
  //     new UnauthorizedRequestException(
  //       "User account not verified.",
  //       loginErrors.USER_UNVERIFIED
  //     )

  // Generate token on login
  var token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24,
  });

  // send user data to app
  const { password: userPassword, ...userData } = user;
  return res.status(200).json({
    status: "success",
    message: "User login succesfully",
    user: userData,
    token,
  });
};

// Sign up
const signup = async (req, res) => {
  const { full_name, email, phone_number, password, nin } = req.body;

  // Check if all fields are provided
  const emptyRequests = [];
  if (!full_name) emptyRequests.push("Full Name");
  if (!email) emptyRequests.push("Email");
  if (!phone_number) emptyRequests.push("Phone Number");
  if (!password) emptyRequests.push("Password");
  if (!nin) emptyRequests.push("NIN");

  if (!full_name || !email || !password || !phone_number || !nin) {
    throw new BadRequestException(
      `${emptyRequests.join(",")} field required`,
      signupErrors.INCOMPLETE_SIGNUP_CREDENTIALS
    );
  }

  // Validate Full Name
  const fullNamePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

  if (!full_name.match(fullNamePattern)) {
    throw new BadRequestException(
      "Only letters are allowed for full name input",
      signupErrors.INVALID_EMAIL_PATTERN
    );
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailPattern)) {
    throw new BadRequestException(
      "Invalid email address provided",
      signupErrors.INVALID_EMAIL_PATTERN
    );
  }

  // Validate NIN
  const ninPattern = /^\d{11}$/;
  if (!nin.match(ninPattern))
    throw new BadRequestException(
      "Invalid NIN provided",
      signupErrors.INVALID_NIN_PATTERN
    );

  // Validate Phone number
  const PhoneNumberPattern = /^\d{11}$/;
  if (!phone_number.match(PhoneNumberPattern))
    throw new BadRequestException(
      "A valid 11 digits phone number is required",
      signupErrors.INVALID_PHONE_NUMBER_PATTERN
    );

  // Checks if user with same email already exist
  const userWithEmailExists = await prisma.user.findFirst({
    where: { email },
  });

  if (userWithEmailExists) {
    throw new BadRequestException(
      "User with email already exists",
      signupErrors.USER_WITH_EMAIL_ALREADY_EXISTS
    );
  }

  // Checks if user with same phone number already exist
  const userWithPhoneNumberExists = await prisma.user.findFirst({
    where: { phone_number },
  });

  if (userWithPhoneNumberExists)
    throw new BadRequestException(
      "User with phone number already exists",
      signupErrors.USER_WITH_PHONE_NUMBER_ALREADY_EXISTS
    );

  // Checks if user with same nin already exist
  // const userWithNinExists = await prisma.user.findFirst({
  //   where: { nin: nin },
  // });

  // if (userWithNinExists)
  //   throw new BadRequestException(
  //     "User with nin already exists",
  //     signupErrors.USER_WITH_NIN_ALREADY_EXISTS
  //   );

  // encrypt password
  const encryptedPassword = bcrypt.hashSync(password, 10);

  // Create User Object in DB
  const newUser = await prisma.user.create({
    data: {
      name: full_name,
      email,
      phone_number,
      nin,
      password: encryptedPassword,
    },
  });

  // Create otp
  const otp = await createOtp(newUser.id);

  // Send OTP to new user email
  sendotp(
    newUser.email,
    "Complete your Vettme account creation",
    `Your OTP is ${otp}. It expires in 10 minutes.`
  );

  // return message to user
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

  if (!userId)
    throw new BadRequestException(
      "User id not provided",
      otpErrors.USER_ID_NOT_PROVIDED
    );

  // Check user
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user)
    throw new BadRequestException(
      "User with supplied user_id not found",
      loginErrors.USER_DOES_NOT_EXIST
    );

  // Check if user is already active
  if (user.isActive)
    throw new BadRequestException(
      "User is already active",
      otpErrors.USER_ALREADY_ACTIVE
    );

  const otp = await createOtp(userId);

  // Send OTP to new user email
  await sendotp(
    user.email,
    "Complete your Vettme account creation",
    `Your OTP is ${otp}. It expires in 10 minutes.`
  );

  return res.status(200).json({
    status: "success",
    message: "New OTP has been sent to user email",
  });
};

// Verify OTP
const verifyotp = async (req, res) => {
  const { userId, otp } = req.body;

  // Check if userId was provided by app
  if (!userId)
    throw new BadRequestException(
      "User id not provided",
      otpErrors.USER_ID_NOT_PROVIDED
    );

  // Check if otp was provided by app
  if (!userId)
    throw new BadRequestException(
      "Otp not provided",
      otpErrors.OTP_NOT_PROVIDED
    );

  // Check if user exists
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    throw new BadRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  const otpExists = await prisma.otp.findFirst({
    where: {
      userId,
      otp: parseInt(otp),
    },
  });

  if (!otpExists)
    throw new BadRequestException(
      "Invalid otp provided",
      otpErrors.INVALID_OTP
    );

  // Check if OTP has not been used
  if (otpExists.used)
    throw new BadRequestException(
      "Otp has been blacklisted",
      otpErrors.OTP_BLACKLISTED
    );

  // Activate user account
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isActive: true,
    },
  });

  // search db for otp
  const foundOtp = await prisma.otp.findFirst({
    where: { userId, otp: parseInt(otp) },
  });

  // Disable OTP for future usage
  await prisma.otp.update({
    where: { id: foundOtp.id },
    data: {
      used: true,
    },
  });

  return res.status(200).json({
    status: "success",
    message: "Account activation successful",
  });
};

// Verify user data
const verifyUserData = async (req, res) => {
  const { userId } = req.body;

  // check if userId is provided
  if (!userId)
    throw new BadRequestException(
      "User ID not provided",
      otpErrors.USER_ID_NOT_PROVIDED
    );

  // Checks if user with email already exist
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    throw new BadRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  const userDataMatch = await verifyUser(userId);

  // Verify user if supplied data matches NIN data
  if (!userDataMatch)
    throw new UnauthorizedRequestException(
      "User data does not match NIN data",
      verificationErrors.USER_DATA_MISMATCH
    );

  // Update user data if data matches
  const userVerified = await prisma.user.update({
    where: { id: userId },
    data: {
      isVerified: true,
    },
  });

  // Throw new error if server fails to verify user
  if (!userVerified)
    throw new ServerErrorException(
      "User cannot be verified. Please retry",
      verificationErrors.DATABASE_VERIFICATION_ERROR,
      null
    );

  return res.status(200).json({
    status: "success",
    message: "User verified successfully",
  });
};

module.exports = {
  verifyotp,
  signup,
  login,
  resendOtp,
  verifyUserData,
};
