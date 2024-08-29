require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const NotFoundErrorException = require("../exceptions/not-found");
const {
  notFoundErrors,
  serverErrors,
  verificationErrors,
  loginErrors,
  signupErrors,
} = require("../exceptions/status-codes");
const ServerErrorException = require("../exceptions/server-error");
const bcrypt = require("bcrypt");
const BadRequestException = require("../exceptions/bad-requests");
const jwt = require("jsonwebtoken");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const findUser = require("../functions/findUser");
const validatePassword = require("../functions/validatePassword");
const sendSupportMail = require("../functions/sendSupportMail");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// function to remove empty fields
const removeEmptyFields = (rawUpdateData) => {
  return Object.fromEntries(
    Object.entries(rawUpdateData).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  );
};

// function to handle user authorization
const authorizeUser = (token, userId) => {
  const userFromToken = jwt.decode(token, process.env.JWT_TOKEN);
  if (userId !== userFromToken.userId) {
    throw new UnauthorizedRequestException(
      "Unauthorized access to user resource",
      verificationErrors.UNAUTHORIZED_RESOURCE_ACCESS
    );
  }
};

// Get a user
const getUser = async (req, res) => {
  const { userId } = req.params;

  // query DB for user
  const user = await findUser({ id: userId });

  return res.status(200).json({
    status: "success",
    message: "User found",
    user,
  });
};

// Delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  const { token } = req.headers;

  // Compare user id to id of cookie
  const userFromToken = jwt.decode(token, process.env.JWT_TOKEN);

  if (userId !== userFromToken.userId) {
    throw new UnauthorizedRequestException(
      "You cannot delete another user",
      verificationErrors.UNAUTHORIZED_RESOURCE_ACCESS
    );
  }

  // query DB for user
  const foundUser = await findUser({ id: userId });

  // Delete user account
  const deletedUser = await prisma.user.delete({
    where: {
      id: foundUser.id,
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
  const { userId } = req.params;
  const { token } = req.headers;
  const { full_name, email, phone_number, old_password, new_password } =
    req.body;

  authorizeUser(token, userId);

  // query DB for user
  const foundUser = await findUser({ id: userId });

  if (!foundUser)
    throw new BadRequestException(
      "User does not exist",
      notFoundErrors.USER_NOT_FOUND
    );

  // Remove empty fields from update data
  const updateData = removeEmptyFields({
    name: full_name,
    email,
    phone_number,
  });

  if (updateData.phone_number) {
    const phoneNumberPattern = /^\d{11}$/;
    if (!updateData.phone_number.match(phoneNumberPattern)) {
      throw new BadRequestException(
        "Invalid phone number provided",
        signupErrors.INVALID_PHONE_NUMBER_PATTERN
      );
    }
  }

  // update user data without password
  if (!old_password && !new_password) {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: updateData,
      omit: {
        password: true,
      },
    });

    if (!updatedUser) {
      throw new ServerErrorException(
        "Unable to update user",
        serverErrors.UNKNOWN_ERROR,
        err
      );
    }
    return res.status(200).json({
      status: "success",
      message: "User data updated successfully",
      user: updatedUser,
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
    // Match password requirement
    const passwordRequirementMatched = validatePassword(new_password);
    if (!passwordRequirementMatched) {
      throw new BadRequestException(
        "Password must contain at least one uppercase letter, lowercase letter, number and special character.",
        loginErrors.PASSWORD_MISMATCH
      );
    }

    // Compare old password to user password in db
    const oldPasswordIsCorrect = bcrypt.compareSync(
      old_password,
      foundUser.password
    );

    if (!oldPasswordIsCorrect)
      throw new BadRequestException(
        "Old password incorrect",
        verificationErrors.OLD_PASSWORD_MISMATCH
      );

    // Update user password
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        password: bcrypt.hashSync(new_password, 10),
      },
      omit: {
        password: true,
      },
    });

    if (!updatedUser) {
      throw new ServerErrorException(
        "Unable to update user password",
        serverErrors.UNKNOWN_ERROR,
        err
      );
    }
    return res.status(200).json({
      status: "success",
      message: "User password updated successfully",
      user: updatedUser,
    });
  }
};

const reportProblem = async (req, res) => {
  const { token } = req.headers;
  const { statement, description } = req.body;
  const images = req.files;

  // Prepare the attachments array
  const attachments = images.map((image) => ({
    filename: image.originalname,
    content: image.buffer,
    contentType: image.mimetype,
  }));

  const user = await findUser({ token });

  sendSupportMail(user.email, statement, description, attachments);

  return res.status(200).json({
    status: "success",
    message: "Problem reported successfully.",
  });
};

module.exports = { getUser, deleteUser, updateUser, reportProblem };
