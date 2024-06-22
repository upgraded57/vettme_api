const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const sendotp = require("../functions/sendotp");
const BadRequestException = require("../exceptions/bad-requests");
const { loginErrors, signupErrors } = require("../exceptions/status-codes");

const prisma = new PrismaClient();

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
    omit: {
      isActive: true,
    },
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

const signup = async (req, res, next) => {
  const { full_name, email, phone_number, password } = req.body;

  // Check if all fields are provided
  if (!full_name || !email || !password || !phone_number) {
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
        "User already exists",
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
        "User already exists",
        signupErrors.USER_WITH_PHONE_NUMBER_ALREADY_EXISTS
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

// Create OTP
const createOtp = async (userId) => {
  // Create six digits OTP
  const otp = Math.floor(Math.random() * 1000000);

  // Store OTP to DB
  const newOtp = await prisma.otp.create({
    data: {
      userId,
      otp,
    },
  });

  return newOtp;
};

// Verify OTP
const verifyotp = async (req, res) => {
  const { userId, otp } = req.body;

  // Check if userId and otp were provided by app
  if (!userId || !otp)
    return res.status(400).json({
      status: "error",
      mssg: "verification data were not provided",
    });

  const otpExists = await prisma.otp.findFirst({
    where: {
      userId,
      otp: parseInt(otp),
    },
  });

  if (!otpExists)
    return res.status(400).json({
      status: "error",
      mssg: "Invalid OTP supplied",
    });

  // Check if OTP has not been used
  if (otpExists.used)
    return res.status(400).json({
      status: "error",
      mssg: "OTP has been blacklisted",
    });

  // Activate user account
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isActive: true,
    },
  });

  // Disable OTP for future usage
  await prisma.otp.update({
    where: { userId, otp: parseInt(otp) },
    data: {
      used: true,
    },
  });

  return res.status(200).json({
    status: "success",
    mssg: "Account activation successful",
  });
};

module.exports = { verifyotp, signup, login };
