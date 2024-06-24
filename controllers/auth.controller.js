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

const prisma = new PrismaClient();

// Login
const login = async (req, res, next) => {
  const { email, password } = req.body;

  // check if login info were provided
  if (!email || !password)
    return next(
      new BadRequestException(
        "Login credentials not provided",
        loginErrors.INCOMPLETE_LOGIN_CREDENTIALS
      )
    );

  // Checks if user with email already exist
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    return next(
      new BadRequestException(
        "Incorrect login credentials",
        loginErrors.USER_DOES_NOT_EXIST
      )
    );
  }

  // Check if password is correct
  const userPasswordIsCorrect = bcrypt.compareSync(password, user.password);

  if (!userPasswordIsCorrect) {
    return next(
      new BadRequestException(
        "Incorrect login credentials",
        loginErrors.INCORRECT_PASSWORD
      )
    );
  }

  // Check if user is active
  if (!user.isActive)
    return next(
      new UnauthorizedRequestException(
        {
          mssg: "User account not activated. Activate account with OTP",
          userId: user.id,
        },
        loginErrors.USER_INACTIVE
      )
    );

  // Check if user is verified
  if (!user.isVerified)
    return next(
      new UnauthorizedRequestException(
        {
          mssg: "User account not verified.",
          userId: user.id,
        },
        loginErrors.USER_UNVERIFIED
      )
    );

  // Generate token on login
  var token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24,
  });

  // Store token in http only cookie
  res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 24 });

  // send user data to app
  const { password: userPassword, ...userData } = user;
  res.status(200).json({
    status: "success",
    mssg: "User login succesfully",
    user: userData,
  });
};

// Sign up
const signup = async (req, res, next) => {
  const { full_name, email, phone_number, password, nin } = req.body;

  // Check if all fields are provided
  if (!full_name || !email || !password || !phone_number || !nin) {
    return next(
      new BadRequestException(
        "All fields are required",
        signupErrors.INCOMPLETE_SIGNUP_CREDENTIALS
      )
    );
  }

  // Validate email
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!email.match(emailPattern)) {
    return next(
      new BadRequestException(
        "Invalid email address provided",
        signupErrors.INVALID_EMAIL_PATTERN
      )
    );
  }

  // Checks if user with same email already exist
  const userWithEmailExists = await prisma.user.findFirst({ where: { email } });

  if (userWithEmailExists) {
    return next(
      new BadRequestException(
        "User with email already exists",
        signupErrors.USER_WITH_EMAIL_ALREADY_EXISTS
      )
    );
  }

  // Checks if user with same phone number already exist
  const userWithPhoneNumberExists = await prisma.user.findFirst({
    where: { phone_number },
  });

  if (userWithPhoneNumberExists)
    return next(
      new BadRequestException(
        "User with phone number already exists",
        signupErrors.USER_WITH_PHONE_NUMBER_ALREADY_EXISTS
      )
    );

  // Checks if user with same nin already exist
  const userWithNinExists = await prisma.user.findFirst({
    where: { nin },
  });

  if (userWithNinExists)
    return next(
      new BadRequestException(
        "User with nin already exists",
        signupErrors.USER_WITH_NIN_ALREADY_EXISTS
      )
    );

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
  const { password: newUserPassword, isActive, ...newUserData } = newUser;

  res.status(201).json({
    status: "Account created successfully. OTP has been sent to user email",
    user: newUserData,
  });
};

// Resend OTP
const resendOtp = async (req, res, next) => {
  const { userId } = req.body;

  if (!userId)
    return next(
      new BadRequestException(
        "User id not provided",
        otpErrors.USER_ID_NOT_PROVIDED
      )
    );

  // Check user
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user)
    return next(
      new BadRequestException(
        "User with supplied user_id not found",
        loginErrors.USER_DOES_NOT_EXIST
      )
    );

  // Check if user is already active
  if (user.isActive)
    return next(
      new BadRequestException(
        "User is already active",
        otpErrors.USER_ALREADY_ACTIVE
      )
    );

  const otp = createOtp(userId);

  // Send OTP to new user email
  sendotp(
    user.email,
    "Complete your Vettme account creation",
    `Your OTP is ${otp}. It expires in 10 minutes.`
  );

  res.status(200).json({
    status: "success",
    message: "New OTP has been sent to user email",
  });
};

// Verify OTP
const verifyotp = async (req, res, next) => {
  const { userId, otp } = req.body;

  // Check if userId was provided by app
  if (!userId)
    return next(
      new BadRequestException(
        "User id not provided",
        otpErrors.USER_ID_NOT_PROVIDED
      )
    );

  // Check if otp was provided by app
  if (!userId)
    return next(
      new BadRequestException("Otp not provided", otpErrors.OTP_NOT_PROVIDED)
    );

  // Check if user exists
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    return next(
      new BadRequestException(
        "User does not exist",
        loginErrors.USER_DOES_NOT_EXIST
      )
    );
  }

  const otpExists = await prisma.otp.findFirst({
    where: {
      userId,
      otp: parseInt(otp),
    },
  });

  if (!otpExists)
    return next(
      new BadRequestException("Invalid otp provided", otpErrors.INVALID_OTP)
    );

  // Check if OTP has not been used
  if (otpExists.used)
    return next(
      new BadRequestException(
        "Otp has been blacklisted",
        otpErrors.OTP_BLACKLISTED
      )
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
    mssg: "Account activation successful",
  });
};

// Verify user data
const verifyUserData = async (req, res, next) => {
  const { userId } = req.body;

  // check if userId is provided
  if (!userId)
    return next(
      new BadRequestException(
        "User ID not provided",
        otpErrors.USER_ID_NOT_PROVIDED
      )
    );

  // Checks if user with email already exist
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return next(
      new BadRequestException(
        "User does not exist",
        loginErrors.USER_DOES_NOT_EXIST
      )
    );
  }

  const userDataMatch = await verifyUser(userId);

  // Verify user if supplied data matches NIN data
  if (!userDataMatch)
    return next(
      new UnauthorizedRequestException(
        "User data does not match NIN data",
        verificationErrors.USER_DATA_MISMATCH
      )
    );

  // Update user data if data matches
  const userVerified = await prisma.user.update({
    where: { id: userId },
    data: {
      isVerified: true,
    },
  });

  // Throw error if server fails to verify user
  if (!userVerified)
    return next(
      new ServerErrorException(
        "User cannot be verified. Please retry",
        verificationErrors.DATABASE_VERIFICATION_ERROR
      )
    );

  res.status(200).json({
    status: "success",
    mssg: "User verified successfully",
  });
};

// Logout
const logout = async (req, res) => {
  // Destroy cookie
  res.clearCookie("token", { httpOnly: true });

  res.status(200).json({
    status: "success",
    mssg: "User logout successfully",
  });
};

module.exports = {
  verifyotp,
  signup,
  login,
  resendOtp,
  verifyUserData,
  logout,
};
