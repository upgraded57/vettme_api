const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { driversLicenseData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const sandboxDriversLicense = async (req, res) => {
  const { license_number } = req.query;
  const app = req.app;
  const company = req.company;

  if (!license_number) {
    throw new BadRequestException(
      "License number is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if license_number is correct
  if (license_number !== "FKJ494A2133") {
    // Create API log for request
    await prisma.log.create({
      data: {
        application: {
          connect: {
            id: app.id,
          },
        },
        service: "Driver's License",
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
        service: "Driver's License",
        cost: "0",
        status: "404",
      },
    });
    throw new NotFoundErrorException(
      "License number not found",
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
      service: "Driver's License",
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
      service: "Driver's License",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Driver's License data fetched successfully",
    data: driversLicenseData,
  });
};

module.exports = { sandboxDriversLicense };
