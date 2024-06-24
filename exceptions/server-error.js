const HttpExceptions = require("./root");

class ServerErrorException extends HttpExceptions {
  constructor(message, errorCode) {
    super(message, errorCode, 500, null);
  }
}

module.exports = ServerErrorException;
