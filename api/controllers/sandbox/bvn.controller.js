const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { bvnData } = require("../../data/sandboxData");
const CreateLog = require("../../functions/CreateLog");
const CreateRecentActivity = require("../../functions/CreateRecentActivity");

const sandboxBvn = async (req, res) => {
  const { bvn } = req.query;
  const app = req.app;
  const company = req.company;

  if (!bvn) {
    throw new BadRequestException(
      "BVN is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  const service = "Bvn";
  const environment = "sandbox";

  // BVN validation
  const isValidBvn = bvn === "22222222222";

  // Log API request
  const statusCode = isValidBvn ? "200" : "404";
  await CreateLog({
    appId: app.id,
    service,
    statusCode,
    environment,
  });

  // Log recent activity
  await CreateRecentActivity({
    appId: app.id,
    companyId: company.id,
    service: service.toLowerCase(),
    cost: 0,
    status: statusCode,
    environment,
  });

  if (!isValidBvn) {
    throw new NotFoundErrorException(
      "BVN not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "BVN data fetched successfully",
    data: bvnData,
  });
};

module.exports = { sandboxBvn };
