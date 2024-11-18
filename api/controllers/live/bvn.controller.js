const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const ServerErrorException = require("../../../exceptions/server-error");
const { apiErrors } = require("../../../exceptions/status-codes");
const UnauthorizedRequestException = require("../../../exceptions/unauthorized");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const axiosInstance = require("../../../utils/axiosConfig");
const endpoints = require("../../../utils/VettEndpoints");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const liveBvn = async (req, res) => {
  const { bvn } = req.query;
  const app = req.app;
  const company = req.company;

  if (!bvn) {
    throw new BadRequestException(
      "Bvn is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if compnay has enough balance in wallet
  if (company.balance < 300) {
    throw new UnauthorizedRequestException(
      "Insufficient wallet amount. Please topup",
      apiErrors.INSUFFICIENT_WALLET_AMOUNT
    );
  }

  // Make dojah request here
  try {
    const result = await axiosInstance.get(endpoints.bvn, {
      params: { bvn },
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
        service: "Bvn",
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
        service: "Bvn",
        cost: "0",
        status: "200",
      },
    });

    // Return dummy data
    res.status(200).json({
      status: "success",
      message: "Bvn data fetched successfully",
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
        service: "Bvn",
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

module.exports = liveBvn;
