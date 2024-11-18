const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { bvnData, vinData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const sandboxVin = async (req, res) => {
  const { vin } = req.query;
  const app = req.app;
  const company = req.company;

  if (!vin) {
    throw new BadRequestException(
      "VIN is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if bvn is correct
  if (vin !== "91F1234567890123") {
    throw new NotFoundErrorException(
      "VIN not found",
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
      service: "Voter's Id",
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
      service: "Voter's ID",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "VIN data fetched successfully",
    data: vinData,
  });
};

module.exports = { sandboxVin };
