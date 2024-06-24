const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const { authenticationErrors } = require("../exceptions/status-codes");
require("dotenv").config({
  path: "../.env",
});

const validateAuth = async (req, res, next) => {
  // Check if user cookie is present
  if (!req.cookies) {
    return next(
      new UnauthorizedRequestException(
        "Authentication credentials not provided",
        authenticationErrors.COOKIE_NOT_PROVIDED
      )
    );
  }

  // Check if user auth cookie is present
  const { token } = req.cookies;

  if (!token)
    return next(
      new UnauthorizedRequestException(
        "Authentication credentials not provided",
        authenticationErrors.AUTHENTICATION_DATA_NOT_PROVIDED
      )
    );

  const tokenData = jwt.decode(token, process.env.JWT_KEY);

  // Check if user auth cookie is expired.
  if (Date.now() >= tokenData.exp * 1000) {
    // clear cookie and issue new one
    res.clearCookie("token", { httpOnly: true });

    // Issue a new cookie
    const newToken = jwt.sign(
      { userId: tokenData.userId },
      process.env.JWT_KEY,
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    res.cookie("token", newToken, { httpOnly: true, maxAge: 60 * 60 * 24 });

    console.log(newToken);
  }

  next();
};

module.exports = validateAuth;
