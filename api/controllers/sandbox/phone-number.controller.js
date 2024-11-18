const BadRequestException = require("../../../exceptions/bad-requests");
const NotFoundErrorException = require("../../../exceptions/not-found");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");
const { phoneNumberData } = require("../../data/sandboxData");

const prisma = new PrismaClient({ log: ["warn", "error"] });

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

  // Check if phone number is correct
  if (phone_number !== "09011111111") {
    throw new NotFoundErrorException(
      "Phone number not found",
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
      service: "Phone Number",
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
      service: "Phone Number",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Phone number data fetched successfully",
    data: phoneNumberData,
  });
};

module.exports = { sandboxPhoneNumber };
