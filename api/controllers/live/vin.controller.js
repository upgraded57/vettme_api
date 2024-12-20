const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const UnauthorizedRequestException = require("../../../exceptions/unauthorized");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const axiosInstance = require("../../../utils/axiosConfig");
const endpoints = require("../../../utils/VettEndpoints");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const liveVin = async (req, res) => {
  const { vin } = req.query;
  const app = req.app;
  const company = req.company;

  if (!vin) {
    throw new BadRequestException(
      "Vin is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if company has enough balance in wallet
  if (company.balance < 100) {
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
    const result = await axiosInstance.get(endpoints.voters_id, {
      params: { vin },
    });

    // Deduct charge from company account
    await prisma.company.update({
      where: {
        id: company.id,
      },
      data: {
        balance: company.balance - 100,
      },
    });

    requestSuccessful = true;
    requestResult = result.data.entity;
  } catch (error) {
    (requestSuccessful = false), (requestError = error);
  }

  const statusCode = requestSuccessful
    ? "200"
    : requestError.response.status.toString();
  const service = "Voter's ID";
  const environment = "live";
  const cost = requestSuccessful ? "100" : "0";

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
    message: "Vin data fetched successfully",
    data: requestResult,
  });
};

module.exports = liveVin;
