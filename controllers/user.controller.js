require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");

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
      isActive: true,
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
const deleteUser = async (req, res) => {
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
    return res.status(404).json({
      status: "success",
      mssg: "User not found",
      user: null,
    });

  const deletedUser = await prisma.user.delete({
    where: {
      id: user_id,
    },
    omit: {
      password: true,
      isActive: true,
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
