const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { bvnData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const sandboxEmail = async (req, res) => {
  const { email } = req.query;
  const app = req.app;
  const company = req.company;

  if (!email) {
    throw new BadRequestException(
      "Email is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if email is correct
  const isValidEmail = email === "sample@email.com";
  const statusCode = isValidEmail ? "200" : "404";
  const environment = "sandbox";
  const service = "email";

  // Create Logs
  await CreateLog({
    appId: app.id,
    service,
    statusCode,
    environment,
  });

  await CreateRecentActivity({
    appId: app.id,
    companyId: company.id,
    environment,
    status: statusCode,
    cost: "0",
    service,
  });

  if (!isValidEmail) {
    throw new NotFoundErrorException(
      "Email address not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Email data fetched successfully",
    data: bvnData, //Return dummy email data instead
  });
};

module.exports = { sandboxEmail };
