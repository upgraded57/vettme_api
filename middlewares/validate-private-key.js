const BadRequestException = require("../exceptions/bad-requests");
const { apiErrors } = require("../exceptions/status-codes");

const validatePrivateKey = async (req, res, next) => {
  // Check if public_key exists
  const { api_key } = req.headers;
  const app = req.app;

  if (!api_key) {
    return next(
      new BadRequestException(
        "API key not provided",
        apiErrors.API_KEY_NOT_PROVIDED
      )
    );
  }

  // Check if api key is a public key
  const splitKey = api_key.split("_");

  const keyType = splitKey[0];
  if (keyType !== "private" || splitKey[2] !== "key") {
    return next(
      new BadRequestException(
        "Invalid private key. Live URL must be called with a private key",
        apiErrors.INVALID_API_KEY
      )
    );
  }

  // Check if public key belongs to application
  if (app.private_key !== api_key) {
    return next(
      new BadRequestException(
        "Incorrect application private key",
        apiErrors.INCORRECT_API_KEY
      )
    );
  }

  next();
};

module.exports = validatePrivateKey;
