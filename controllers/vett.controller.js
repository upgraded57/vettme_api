const jwt = require("jsonwebtoken");
require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const ServerErrorException = require("../exceptions/server-error");
const { serverErrors } = require("../exceptions/status-codes");
const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Get verifications history
const getVerifications = async (req, res) => {
  const { token } = req.headers;

  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  //   Query database for user verification history
  await prisma.verification
    .findMany({
      where: { userId },
    })
    .then((results) => {
      res.status(200).json({
        status: "success",
        mssg: "User verifications history found",
        data: results,
      });
    })
    .catch((err) => {
      throw new ServerErrorException(
        "Something went wrong",
        serverErrors.UNKNOWN_ERROR,
        err
      );
    });
};

const verifyPersonnel = async (req, res) => {
  const { token } = req.headers;

  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;
  res.send("Verifications will be created for " + userId);
};

module.exports = { getVerifications, verifyPersonnel };
