const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { bankData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxAccountNumber = async (req, res) => {
  const { account_number, bank_code } = req.query;
  const app = req.app;
  const company = req.company;

  if (!account_number || !bank_code) {
    throw new BadRequestException(
      "Account Number and Bank Code are required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const isRequestValid =
    (account_number === "1234567890") & (bank_code === "058");
  const statusCode = isRequestValid ? "200" : "404";
  const service = "Account Number";
  const environment = "sandbox";

  // Create log
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
    status: statusCode,
    environment,
  });

  if (!isRequestValid) {
    throw new NotFoundErrorException(
      "Account number or bank code not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Account Number data fetched successfully",
    data: bankData,
  });
};

module.exports = { sandboxAccountNumber };
