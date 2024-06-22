const ErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });
};

module.exports = ErrorHandler;

// Error status codes
// Protected Routes

// USER_NOT_VERIFIED
// USER_NOT_ACTIVE
