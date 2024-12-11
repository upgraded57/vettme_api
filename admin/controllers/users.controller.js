require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("../../prisma/generated/app-client");
const {PrismaClient: apiPrismaClient} = require("../../prisma/generated/api-client")
const BadRequestException = require("../../exceptions/bad-requests");
const ServerErrorException = require("../../exceptions/server-error");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

const apiPrisma = new apiPrismaClient({
  log: ["warn", "error"],
});

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  const companies = await apiPrisma.company.findMany()

  return res.status(200).json({
    status: "success",
    message: "Users and comapanies found successfully",
    result: {users, companies}
  });
};

const deactivateUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId) throw new BadRequestException("User Id not provided", null);

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isVerified: false,
      },
    });
  } catch (error) {
    throw new ServerErrorException("Unable to deactivate account", null, error);
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId) throw new BadRequestException("User Id not provided", null);

  // Delete user account
  try {
    await prisma.user.delete({
      where: {
        id: foundUser.id,
      },
      omit: {
        password: true,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "User deleted",
    });
  } catch (err) {
    throw new ServerErrorException("Cannot delete user account", null, err);
  }
};

module.exports = { getUsers, deactivateUser, deleteUser };
