const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { vinData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxVin = async (req, res) => {
  const { vin } = req.query;
  const app = req.app;
  const company = req.company;

  if (!vin) {
    throw new BadRequestException(
      "VIN is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const isValidVin = vin === "90F5B1C5B1234567890";
  const service = "Voter's ID";
  const statusCode = isValidVin ? "200" : "404";
  const environment = "sandbox";

  // Create Log
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
    status: statusCode,
    cost: 0,
    environment,
  });

  if (!isValidVin) {
    throw new NotFoundErrorException(
      "VIN not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "VIN data fetched successfully",
    data: vinData,
  });
};

module.exports = { sandboxVin };
