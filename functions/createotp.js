const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create OTP
const createOtp = async (userId) => {
  // Create six digits OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Store OTP to DB
  const newOtp = await prisma.otp.create({
    data: {
      userId,
      otp,
    },
  });

  return newOtp.otp;
};

module.exports = createOtp;
