const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const { authenticationErrors } = require("../exceptions/status-codes");
require("dotenv").config({
  path: "../.env",
});

const validateAuth = async (req, res, next) => {
  const { token } = req.headers;

  // Check if token is present
  if (!token)
    throw new UnauthorizedRequestException(
      "Authentication credentials not provided",
      authenticationErrors.AUTHENTICATION_DATA_NOT_PROVIDED
    )();

  const tokenData = jwt.decode(token, process.env.JWT_KEY);

  // Check if user auth token is expired.
  if (Date.now() >= tokenData.exp * 1000) {
    // Issue a new token
    throw new UnauthorizedRequestException(
      "Session expired. Please login again",
      authenticationErrors.AUTHENTICATION_DATA_NOT_PROVIDED
    )();
  }

  next();
};

module.exports = validateAuth;
