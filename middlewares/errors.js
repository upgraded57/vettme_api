const HttpExceptions = require("../exceptions/root");
const ServerErrorException = require("../exceptions/server-error");
const { serverErrors } = require("../exceptions/status-codes");

const ErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });

  Error.captureStackTrace(this, this.constructor);
};

const globalErrorCatcher = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      let exception;
      if (err instanceof HttpExceptions) {
        exception = err;
      } else {
        exception = new ServerErrorException(
          "Soemthing went wrong",
          serverErrors.UNKNOWN_ERROR,
          err
        );
      }
      next(exception);
    });
  };
};

module.exports = { ErrorHandler, globalErrorCatcher };

// Error status codes
// Protected Routes

// USER_NOT_VERIFIED
// USER_NOT_ACTIVE
