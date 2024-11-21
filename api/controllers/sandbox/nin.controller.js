const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { ninData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const sandboxNin = async (req, res) => {
  const { nin } = req.query;
  const app = req.app;
  const company = req.company;

  if (!nin) {
    throw new BadRequestException(
      "NIN is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if nin is correct
  if (nin !== "70123456789") {
    // Create API log for request
    await prisma.log.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        service: "Nin",
        statusCode: "404",
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
        service: "nin",
        cost: "0",
        status: "404",
      },
    });
    throw new NotFoundErrorException(
      "Nin not found",
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
      service: "Nin",
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
      service: "nin",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "NIN data fetched successfully",
    data: ninData, //Return dummy nin data instead
  });
};

module.exports = { sandboxNin };
