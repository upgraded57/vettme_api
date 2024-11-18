const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { bankData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

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

  // Check if account_number is correct
  if (account_number !== "1234567890" || bank_code !== "058") {
    throw new NotFoundErrorException(
      "Account number or bank code not found",
      apiErrors.INCORRECT_VETT_DATA
    );
  }

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
      environment: "sandbox",
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
      environment: "sandbox",
      service: "Account Number",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Account Number data fetched successfully",
    data: bankData,
  });
};

module.exports = { sandboxAccountNumber };
