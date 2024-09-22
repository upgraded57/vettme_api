require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const BadRequestException = require("../../exceptions/bad-requests");
const ServerErrorException = require("../../exceptions/server-error");
const findUser = require("../../functions/findUser");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Get all notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany();

    return res.status(200).json({
      status: "success",
      message: "Notifications fetched successfully",
      notifications,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Unable to fetch notifications",
      null,
      error
    );
  }
};

// Create General Notification
const createGeneralNotification = async (req, res) => {
  const { subject, description } = req.body;

  if (!subject || !description)
    throw new BadRequestException(
      "Notification subject and description required",
      null
    );

  try {
    const createdNotification = await prisma.notification.create({
      data: {
        subject,
        description,
        isGeneral: true,
      },
    });

    return res.status(201).json({
      status: "success",
      message: "General notification created successfully",
      notification: createdNotification,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Unable to create notification",
      null,
      error
    );
  }
};

// Create Target Notification
const createTargetedNotification = async (req, res) => {
  const { subject, description } = req.body;
  const { userId } = req.params;

  if (!subject || !description || !userId)
    throw new BadRequestException(
      "Notification subject, description and userId required",
      null
    );

  const userExists = await findUser({ id: userId });

  try {
    const createdNotification = await prisma.notification.create({
      data: {
        user: {
          connect: {
            id: userExists.id,
          },
        },
        subject,
        description,
      },
    });

    res.status(201).json({
      status: "success",
      message: "Notification created successfully",
      notification: createdNotification,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Unable to create notification",
      null,
      error
    );
  }
};

// Delete Notification
const deleteNotification = async (req, res) => {
  const { notificationId } = req.params;

  if (!notificationId) {
    throw new BadRequestException("Notification Id not provided", null);
  }

  try {
    await prisma.notification.findUnique({
      where: { id: notificationId },
    });

    return res.status(200).json({
      status: "success",
      message: "Notification deleted succeesfully",
    });
  } catch (err) {
    throw new ServerErrorException("Unable to delete notification", null, err);
  }
};

module.exports = {
  createGeneralNotification,
  createTargetedNotification,
  getNotifications,
  deleteNotification,
};
