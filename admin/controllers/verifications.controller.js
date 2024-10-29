const jwt = require("jsonwebtoken");
const { PrismaClient } = require("../../prisma/generated/app-client");

const prisma = new PrismaClient({ log: ["warn", "error"] });

// Get verifications history
const getVerifications = async (req, res) => {
  try {
    const results = await prisma.verification.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    return res.status(200).json({
      status: "success",
      message: "User verifications history found",
      verifications: results,
    });
  } catch (err) {
    throw new ServerErrorException("Cannot get verifications", null, err);
  }
};

module.exports = { getVerifications };
