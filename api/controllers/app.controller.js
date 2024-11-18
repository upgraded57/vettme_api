const BadRequestException = require("../../exceptions/bad-requests");
const NotFoundErrorException = require("../../exceptions/not-found");
const ServerErrorException = require("../../exceptions/server-error");
const { serverErrors } = require("../../exceptions/status-codes");
const { PrismaClient } = require("../../prisma/generated/api-client");
const generateKey = require("../functions/generateKey");

const prisma = new PrismaClient({ log: ["warn", "error"] });

// APi create new application
const createApp = async (req, res) => {
  const { appName } = req.body;
  const company = req.company;

  if (!appName) {
    throw new BadRequestException("Application name required", null);
  }

  // Create keys for app
  const appPublicKey = generateKey("public");
  const appPrivateKey = generateKey("private");
  // Create new app
  try {
    const newApp = await prisma.application.create({
      data: {
        company: {
          connect: {
            id: company.id,
          },
        },
        name: appName,
        public_key: appPublicKey,
        private_key: appPrivateKey,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Application created successfully",
      application: newApp,
    });
  } catch (err) {
    throw new ServerErrorException(
      "Unable to create application",
      serverErrors.UNKNOWN_ERROR,
      err
    );
  }
};

const getApps = async (req, res) => {
  const company = req.company;

  const foundApps = await prisma.application.findMany({
    where: {
      companyId: company.id,
    },
    include: {
      logs: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!foundApps) {
    throw new ServerErrorException(
      "Cannot find applications",
      serverErrors.UNKNOWN_ERROR
    );
  }

  return res.status(200).json({
    status: "success",
    message: "Applications found successfully",
    applications: foundApps,
  });
};

const getAppLogs = async (req, res) => {
  const { appId } = req.params;

  if (!appId) {
    throw new BadRequestException("Application ID not provided", null);
  }

  try {
    const foundApp = await prisma.application.findFirst({
      where: {
        id: appId,
      },
      select: {
        name: true,
        private_key: true,
        public_key: true,
      },
    });
    const foundLogs = await prisma.log.findMany({
      where: {
        applicationId: appId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!foundApp) {
      throw new NotFoundErrorException("Cannot find application", null);
    }

    if (!foundLogs) {
      throw new NotFoundErrorException("Cannot find application logs", null);
    }

    return res.status(200).json({
      status: "success",
      message: "Application logs found",
      logs: foundLogs,
      app: foundApp,
    });
  } catch (err) {
    throw new ServerErrorException("Cannot find application logs", null, err);
  }
};

const deleteApp = async (req, res) => {
  const { appId } = req.params;

  if (!appId) {
    throw new BadRequestException("Application ID not provided", null);
  }

  try {
    await prisma.application.delete({
      where: {
        id: appId,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Application deleted successfully",
    });
  } catch (err) {
    throw new ServerErrorException("Unable to delete app", null, err);
  }
};

const getRecentLogs = async (req, res) => {
  const company = req.company;

  try {
    const recentLogs = await prisma.recentActivities.findMany({
      where: {
        companyId: company.id,
      },
      omit: {
        id: true,
        companyId: true,
      },
      orderBy: {
        date: "desc",
      },
    });

    if (!recentLogs) {
      throw new NotFoundErrorException(
        "Cannot find any recent activities",
        null
      );
    }

    return res.status(200).json({
      status: "success",
      message: "Recent activites fetched successfully",
      activities: recentLogs,
    });
  } catch (err) {
    console.log("Error", err);
    throw new ServerErrorException(
      "Cannot find recent activities",
      serverErrors.UNKNOWN_ERROR,
      err
    );
  }
};

module.exports = {
  createApp,
  getApps,
  getAppLogs,
  deleteApp,
  getRecentLogs,
};
