const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { bvnData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

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

  // Check if bvn is correct
  if (bvn !== "22222222222") {
    // Create API log for request
    await prisma.log.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        service: "Bvn",
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
        service: "bvn",
        cost: "0",
        status: "404",
      },
    });

    throw new NotFoundErrorException(
      "BVN not found",
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
      service: "Bvn",
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
      service: "bvn",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "BVN data fetched successfully",
    data: bvnData,
  });
};

module.exports = { sandboxBvn };
