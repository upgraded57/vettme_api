const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { phoneNumberData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxPhoneNumber = async (req, res) => {
  const { phone_number } = req.query;
  const app = req.app;
  const company = req.company;

  if (!phone_number) {
    throw new BadRequestException(
      "Phone number is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const isValidPhoneNumber = phone_number === "09011111111";
  const service = "Phone Number";
  const statusCode = isValidPhoneNumber ? "200" : "404";
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

  if (!isValidPhoneNumber) {
    throw new NotFoundErrorException(
      "Phone number not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Phone number data fetched successfully",
    data: phoneNumberData,
  });
};

module.exports = { sandboxPhoneNumber };
