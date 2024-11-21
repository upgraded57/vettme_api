const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { ninData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxNin = async (req, res) => {
  const { nin } = req.query;
  const app = req.app;
  const company = req.company;

  if (!nin) {
    throw new BadRequestException(
      "NIN is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const isValidNin = nin === "70123456789";
  const statusCode = isValidNin ? "200" : "404";
  const service = "nin";
  const environment = "sandbox";

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
    service,
    cost: "0",
    environment,
    status: statusCode,
  });

  if (!isValidNin) {
    throw new NotFoundErrorException(
      "Nin not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "NIN data fetched successfully",
    data: ninData, //Return dummy nin data instead
  });
};

module.exports = { sandboxNin };
