const HttpExceptions = require("../exceptions/root");
const ServerErrorException = require("../exceptions/server-error");
const {
  serverErrors,
  verificationErrors,
} = require("../exceptions/status-codes");

const ErrorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    errors: error.errors,
  });

  Error.captureStackTrace(this, this.constructor);

  return;
};

const globalErrorCatcher = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      let exception;
      if (err instanceof HttpExceptions) {
        exception = err;
      } else {
        exception = new ServerErrorException(
          "Something went wrong",
          serverErrors.UNKNOWN_ERROR,
          err
        );
      }
      next(exception);
    });
  };
};

const handleVerificationErrors = (err) => {
  // Throw error if network was reset
  if (err.code && err.code === "ECONNRESET")
    throw new ServerErrorException(
      "Network error. Please retry",
      serverErrors.NETWORK_RESET_ERROR
    );

  // Throw error if network aborted request
  if (err.code && err.code === "ECONNABORTED")
    throw new ServerErrorException(
      "Connection timed out. Please retry",
      serverErrors.NETWORK_RESET_ERROR
    );

  // Throw error if unable to connect with dojah API
  if (
    err.response.status &&
    err.response.status === 401 &&
    err.response.statusText &&
    err.response.statusText === "Unauthorized"
  ) {
    throw new ServerErrorException(
      "Something went wrong",
      serverErrors.DOJAH_AUTHENTICATION_ERROR,
      { error: "Error communicating with database" }
    );
  }

  throw new ServerErrorException(
    err.response.data.error,
    verificationErrors.INVALID_VERIFICATION_DATA,
    err.response.data
  );
};

module.exports = { ErrorHandler, globalErrorCatcher, handleVerificationErrors };
