const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const { authenticationErrors } = require("../exceptions/status-codes");
require("dotenv").config({
  path: "../.env",
});

const validateAdminAuth = async (req, res, next) => {
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

  // Check if user is an admin.
  if (!tokenData.role !== "admin") {
    // Issue a new token
    return next(
      new UnauthorizedRequestException(
        "You do not have the privilege to carry out this operation",
        authenticationErrors.UNAUTHORIZED_RESOURCE_ACCESS
      )
    );
  }

  next();
};

module.exports = validateAdminAuth;
