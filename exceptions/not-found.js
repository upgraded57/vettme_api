const HttpExceptions = require("./root");

class NotFoundErrorException extends HttpExceptions {
  constructor(message, errorCode) {
    super(message, errorCode, 404, null);
  }
}

module.exports = NotFoundErrorException;
