const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { driversLicenseData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxDriversLicense = async (req, res) => {
  const { license_number } = req.query;
  const app = req.app;
  const company = req.company;

  if (!license_number) {
    throw new BadRequestException(
      "License number is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const isValidLicenseNumber = license_number === "FKJ494A2133";
  const service = "Driver's License";
  const statusCode = isValidLicenseNumber ? "200" : "404";
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

  if (!isValidLicenseNumber) {
    throw new NotFoundErrorException(
      "License number not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Driver's License data fetched successfully",
    data: driversLicenseData,
  });
};

module.exports = { sandboxDriversLicense };
