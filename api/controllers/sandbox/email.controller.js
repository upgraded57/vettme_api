const BadRequestException = require("../../../exceptions/bad-requests");
const { apiErrors } = require("../../../exceptions/status-codes");
const { PrismaClient } = require("../../../prisma/generated/api-client");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const sandboxEmail = async (req, res) => {
  const { email } = req.query;
  const app = req.app;
  const company = req.company;

  if (!email) {
    throw new BadRequestException(
      "Email is required",
      apiErrors.DATA_NOT_PROVIDED
    );
  }

  // Check if email is correct

  // Create API log for request
  const newApiLog = await prisma.log.create({
    data: {
      application: {
        connect: {
          id: app.id,
        },
      },
      service: "Email",
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
      service: "Email",
      cost: "0",
      status: "200",
    },
  });

  // Return dummy data
  res.status(200).json({
    status: "success",
    message: "Email data fetched successfully",
    data: newApiLog, //Return dummy email data instead
  });
};

module.exports = { sandboxEmail };
