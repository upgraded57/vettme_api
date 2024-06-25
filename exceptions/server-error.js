const HttpExceptions = require("./root");

class ServerErrorException extends HttpExceptions {
  constructor(message, errorCode, error) {
    super(message, errorCode, 500, error);
  }
}

module.exports = ServerErrorException;
