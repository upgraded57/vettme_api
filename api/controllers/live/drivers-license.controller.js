const BadRequestException = require("../../../exceptions/bad-requests");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const axiosInstance = require("../../../utils/axiosConfig");
const endpoints = require("../../../utils/VettEndpoints");
const ServerErrorException = require("../../../exceptions/server-error");
const UnauthorizedRequestException = require("../../../exceptions/unauthorized");
const NotFoundErrorException = require("../../../exceptions/not-found");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");
const CreateLog = require("../../functions/CreateLog");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const liveDriversLicense = async (req, res) => {
  const { license_number } = req.query;
  const app = req.app;
  const company = req.company;

  if (!license_number) {
    throw new BadRequestException(
      "Driver's license number is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if company has enough balance in wallet
  if (company.balance < 300) {
    throw new UnauthorizedRequestException(
      "Insufficient wallet amount. Please topup",
      apiErrors.INSUFFICIENT_WALLET_AMOUNT
    );
  }

  let requestSuccessful;
  let requestError = null;
  let requestResult = null;

  // Make dojah request here
  try {
    const result = await axiosInstance.get(endpoints.drivers_licence, {
      params: { license_number },
    });

    // Deduct charge from company account
    await prisma.company.update({
      where: {
        id: company.id,
      },
      data: {
        balance: company.balance - 300,
      },
    });

    requestSuccessful = true;
    requestResult = result.data.entity;
  } catch (error) {
    requestSuccessful = false;
    requestError = error;
  }

  const statusCode = requestSuccessful
    ? "200"
    : requestError.response.status.toString();
  const service = "Driver's License";
  const environment = "live";
  const cost = requestSuccessful ? "300" : "0";

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
    cost,
    status: statusCode,
    environment,
  });

  if (!requestSuccessful) {
    throw new NotFoundErrorException(
      requestError.response.data.error,
      null,
      requestError.response.data
    );
  }

  res.status(200).json({
    status: "success",
    message: "Driver's License data fetched successfully",
    data: requestResult,
  });
};

module.exports = liveDriversLicense;
