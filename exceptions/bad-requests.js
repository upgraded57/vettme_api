const HttpExceptions = require("./root");

class BadRequestException extends HttpExceptions {
  constructor(message, errorCode) {
    super(message, errorCode, 400, null);
  }
}

module.exports = BadRequestException;
