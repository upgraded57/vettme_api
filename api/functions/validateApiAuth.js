const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../../exceptions/unauthorized");
const {
  authenticationErrors,
  loginErrors,
} = require("../../exceptions/status-codes");
const { PrismaClient } = require("../../prisma/generated/api-client");
const ServerErrorException = require("../../exceptions/server-error");
const prisma = new PrismaClient({ log: ["warn", "error"] });

require("dotenv").config({
  path: "../.env",
});

const validateApiAuth = async (req, res, next) => {
  const { token } = req.headers;

  // Check if token is present
  if (!token)
    return next(
      new UnauthorizedRequestException(
        "Authentication credentials not provided",
        authenticationErrors.AUTHENTICATION_DATA_NOT_PROVIDED
      )
    );

  const tokenData = jwt.decode(token, process.env.JWT_KEY);

  if (!tokenData) {
    return next(
      new ServerErrorException(
        "Invalid authorization token supplied",
        authenticationErrors.UNAUTHORIZED_RESOURCE_ACCESS
      )
    );
  }

  // Check if user auth token is expired.
  if (Date.now() >= tokenData.exp * 1000) {
    // Issue a new token
    return next(
      new UnauthorizedRequestException(
        "Session expired. Please login again",
        authenticationErrors.AUTHENTICATION_DATA_NOT_PROVIDED
      )
    );
  }

  // Find company account
  const companyExists = await prisma.company.findFirst({
    where: {
      id: tokenData.id,
    },
    omit: {
      password: true,
    },
  });

  if (!companyExists) {
    return next(
      new UnauthorizedRequestException(
        "Cannot find company account",
        loginErrors.USER_DOES_NOT_EXIST
      )
    );
  }

  // Attach company to request body to be used by controllers
  req.company = companyExists;

  next();
};

module.exports = validateApiAuth;
