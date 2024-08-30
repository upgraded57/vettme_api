require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");

const ServerErrorException = require("../exceptions/server-error");
const BadRequestException = require("../exceptions/bad-requests");
const findUser = require("../functions/findUser");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Get all notifications
const getNotifications = async (req, res) => {
  const { token } = req.headers;
  const user = await findUser({ token });

  try {
    // Fetch general notifications and targeted notifications for the user
    const notifications = await prisma.notification.findMany({
      where: {
        OR: [{ isGeneral: true }, { userId: user.id }],
      },
    });

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

// Get single notification
const getNotification = async (req, res) => {
  const { notificationId } = req.params;

  if (!notificationId)
    throw new BadRequestException("Notification Id not provided", null);

  const notification = await prisma.notification.findFirst({
    where: {
      id: notificationId,
    },
  });

  if (!notification)
    throw new BadRequestException("Notification not found", null);

  try {
    // Mark fetched notifications as "read"
    await prisma.notification.update({
      where: {
        id: notification.id,
      },
      data: {
        status: "read",
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Notifications marked as read",
      notification,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Unable to update notifications",
      null,
      error
    );
  }
};

module.exports = {
  getNotifications,
  getNotification,
};
