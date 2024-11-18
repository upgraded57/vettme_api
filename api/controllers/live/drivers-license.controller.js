const BadRequestException = require("../../../exceptions/bad-requests");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const axiosInstance = require("../../../utils/axiosConfig");
const endpoints = require("../../../utils/VettEndpoints");
const ServerErrorException = require("../../../exceptions/server-error");
const UnauthorizedRequestException = require("../../../exceptions/unauthorized");
const NotFoundErrorException = require("../../../exceptions/not-found");

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

    // Create API log for request
    await prisma.log.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        service: "Driver's License",
        statusCode: "200",
        environment: "live",
      },
    });

    // Create recent activity log for request
    await prisma.recentActivities.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        company: {
          connect: {
            id: company.id,
          },
        },
        environment: "live",
        service: "Driver's License",
        cost: "0",
        status: "200",
      },
    });

    // Return dummy data
    res.status(200).json({
      status: "success",
      message: "Driver's License data fetched successfully",
      data: result.data.entity,
    });
  } catch (error) {
    // Create error log
    await prisma.log.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        service: "Driver's License",
        statusCode: error.response.status.toString(),
        environment: "live",
      },
    });

    throw new NotFoundErrorException(
      error.response.data.error,
      null,
      error.response.data
    );
  }
};

module.exports = liveDriversLicense;
