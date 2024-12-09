const BadRequestException = require("../exceptions/bad-requests");
const { apiErrors } = require("../exceptions/status-codes");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const { PrismaClient } = require("../prisma/generated/api-client");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const validateAppID = async (req, res, next) => {
  const { app_id } = req.headers;

  if (!app_id) {
    return next(
      new BadRequestException(
        "App ID not provided",
        apiErrors.APP_ID_NOT_PROVIDED
      )
    );
  }

  // Check if app_id exists
  const appExists = await prisma.application.findFirst({
    where: {
      id: app_id,
    },
  });

  if (!appExists) {
    return next(
      new BadRequestException(
        "Application does not exist",
        apiErrors.APP_DOES_NOT_EXIST
      )
    );
  }

  // Check if company is attached to request body
  let company;
  if (req.company) {
    company = req.company;
    return;
  } else {
    const companyExists = await prisma.company.findFirst({
      where: {
        applications: {
          some: { id: appExists.id },
        },
      },
    });

    if (companyExists) {
      company = companyExists;
    } else {
      return next(
        new BadRequestException(
          "Cannot find company with application",
          apiErrors.APP_DOES_NOT_EXIST
        )
      );
    }
  }


  req.app = appExists;
  req.company = company;

  next();
};

module.exports = validateAppID;
