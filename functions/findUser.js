const { loginErrors } = require("../exceptions/status-codes");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const findUser = async ({ token, email, id, phone_number }) => {
  // Data can be id, token, phone_number or email
  let user;

  // Find user by token
  if (token) {
    const { userId } = jwt.decode(token, process.env.JWT_KEY);
    user = await prisma.user.findUnique({
      where: { id: userId },
    });
  }

  // Find user by id
  if (id) {
    user = await prisma.user.findUnique({
      where: { id },
    });
  }

  // Find user by email
  if (email) {
    user = await prisma.user.findUnique({
      where: { email },
    });
  }

  // Find user by phone_number
  if (phone_number) {
    user = await prisma.user.findUnique({
      where: { phone_number },
    });
  }

  if (!user)
    throw new UnauthorizedRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );
  return user;
};

module.exports = findUser;
