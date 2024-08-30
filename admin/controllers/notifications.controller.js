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

    res.status(201).json({
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

module.exports = { createGeneralNotification, createTargetedNotification };
