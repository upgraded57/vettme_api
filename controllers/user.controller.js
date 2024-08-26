require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const NotFoundErrorException = require("../exceptions/not-found");
const {
  notFoundErrors,
  serverErrors,
  verificationErrors,
} = require("../exceptions/status-codes");
const ServerErrorException = require("../exceptions/server-error");
const bcrypt = require("bcrypt");
const BadRequestException = require("../exceptions/bad-requests");
const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../exceptions/unauthorized");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

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
      message: "User not found",
      user: null,
    });

  return res.status(200).json({
    status: "success",
    message: "User found",
    user,
  });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { user_id } = req.params;

  const { token } = req.headers;

  // Compare user id to id of cookie
  const userFromToken = jwt.decode(token, process.env.JWT_TOKEN);

  if (user_id !== userFromToken.user_id) {
    throw new UnauthorizedRequestException(
      "You cannot delete another user",
      verificationErrors.UNAUTHORIZED_RESOURCE_ACCESS
    );
  }

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
    throw new NotFoundErrorException(
      "User does not exist",
      notFoundErrors.USER_NOT_FOUND
    );

  // Delete user account
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
      message: "Unable to delete user",
      user: null,
    });

  return res.status(200).json({
    status: "success",
    message: "User deleted",
    user: deletedUser,
  });
};

const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { token } = req.headers;
  const { full_name, email, phone_number, old_password, new_password } =
    req.body;

  // Compare user id to id of cookie
  const userFromToken = jwt.decode(token, process.env.JWT_TOKEN);

  if (user_id !== userFromToken.user_id) {
    throw new UnauthorizedRequestException(
      "You cannot update this user information",
      verificationErrors.UNAUTHORIZED_RESOURCE_ACCESS
    );
  }

  // query DB for user
  const foundUser = await prisma.user.findFirst({
    where: {
      id: user_id,
    },
    omit: {
      password: true,
    },
  });

  if (!foundUser)
    throw new BadRequestException(
      "User does not exist",
      notFoundErrors.USER_NOT_FOUND
    );

  const rawUpdateData = { name: full_name, email, phone_number };
  const removeEmptyFields = () => {
    return Object.fromEntries(
      Object.entries(rawUpdateData).filter(
        ([_, value]) => value !== null && value !== undefined && value !== ""
      )
    );
  };
  const updateData = removeEmptyFields();

  // update user data without password
  if (!old_password && !new_password) {
    await prisma.user
      .update({
        where: {
          id: user_id,
        },
        data: updateData,
      })
      .then((updatedUser) => {
        const { password, ...others } = updatedUser;
        return res.status(200).json({
          status: "success",
          message: "User data updated successfully",
          user: others,
        });
      })
      .catch((err) => {
        throw new ServerErrorException(
          "Unable to update user",
          serverErrors.UNKNOWN_ERROR,
          err
        );
      });
  } else if (
    (old_password && !new_password) ||
    (!old_password && new_password)
  ) {
    throw new BadRequestException(
      "Old password and new password field required",
      verificationErrors.USER_DATA_MISMATCH
    );
  } else if (old_password && new_password) {
    // Fetch user from db
    const userToBeUpdated = await prisma.user.findFirst({
      where: { id: user_id },
    });
    // Compare old password to user password in db
    const oldPasswordIsCorrect = bcrypt.compareSync(
      old_password,
      userToBeUpdated.password
    );

    if (!oldPasswordIsCorrect)
      throw new BadRequestException(
        "Old password incorrect",
        verificationErrors.OLD_PASSWORD_MISMATCH
      );

    // Update user password
    await prisma.user
      .update({
        where: { id: user_id },
        data: {
          password: bcrypt.hashSync(new_password, 10),
        },
      })
      .then((updatedUser) => {
        const { password, ...others } = updatedUser;
        return res.status(200).json({
          status: "success",
          message: "User password updated successfully",
          user: others,
        });
      })
      .catch((err) => {
        throw new ServerErrorException(
          "Unable to update user password",
          serverErrors.UNKNOWN_ERROR,
          err
        );
      });
  }
};

module.exports = { getUser, deleteUser, updateUser };
