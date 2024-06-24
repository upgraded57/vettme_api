const HttpExceptions = require("./root");

class UnauthorizedRequestException extends HttpExceptions {
  constructor(message, errorCode) {
    super(message, errorCode, 403, null);
  }
}

module.exports = UnauthorizedRequestException;
