const HttpExceptions = require("./root");

class NotFoundErrorException extends HttpExceptions {
  constructor(message, errorCode, error) {
    super(message, errorCode, 404, error || null);
  }
}

module.exports = NotFoundErrorException;
