const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const UnauthorizedRequestException = require("../../../exceptions/unauthorized");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const axiosInstance = require("../../../utils/axiosConfig");
const endpoints = require("../../../utils/VettEndpoints");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const liveNuban = async (req, res) => {
  const { account_number, bank_code } = req.query;
  const app = req.app;
  const company = req.company;

  if (!account_number || !bank_code) {
    throw new BadRequestException(
      "Account number and bank code are required",
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
    const result = await axiosInstance.get(endpoints.nuban, {
      params: { account_number, bank_code },
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
        service: "Account Number",
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
        service: "Account Number",
        cost: "0",
        status: "200",
      },
    });

    // Return dummy data
    res.status(200).json({
      status: "success",
      message: "Account Number data fetched successfully",
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
        service: "Account Number",
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

module.exports = liveNuban;
