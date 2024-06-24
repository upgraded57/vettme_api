require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const NotFoundErrorException = require("../exceptions/not-found");
const { notFoundErrors } = require("../exceptions/status-codes");

const prisma = new PrismaClient();

// Get a user
const getUser = async (req, res) => {
  const { user_id } = req.params;

  // query DB for user
  const user = await prisma.user.findFirst({
    where: {
      id: user_id,
    },

    omit: {
      password: true,
    },
  });

  if (!user)
    return res.status(404).json({
      status: "success",
      mssg: "User not found",
      user: null,
    });

  res.status(200).json({
    status: "success",
    mssg: "User found",
    user,
  });
};

// Delete a user
const deleteUser = async (req, res, next) => {
  const { user_id } = req.params;

  // query DB for user
  const foundUser = await prisma.user.findFirst({
    where: {
      id: user_id,
    },
    omit: {
      password: true,
      isActive: true,
    },
  });

  if (!foundUser)
    return next(
      new NotFoundErrorException(
        "User does not exist",
        notFoundErrors.USER_NOT_FOUND
      )
    );

  const deletedUser = await prisma.user.delete({
    where: {
      id: user_id,
    },
    omit: {
      password: true,
    },
  });

  if (!deletedUser)
    return res.status(500).json({
      status: "error",
      mssg: "Unable to delete user",
      user: null,
    });

  return res.status(200).json({
    status: "success",
    mssg: "User deleted",
    user: deletedUser,
  });
};

module.exports = { getUser, deleteUser };
