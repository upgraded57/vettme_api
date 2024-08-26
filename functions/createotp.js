const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Create OTP
const createOtp = async (userId) => {
  // Create six digits OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Blacklist all tokens associated to user
  await prisma.otp.updateMany({
    where: {
      userId,
      used: false, // Update only OTPs that are currently not used
    },
    data: {
      used: true,
    },
  });

  // Store OTP to DB
  const newOtp = await prisma.otp.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      otp,
    },
  });

  return newOtp.otp;
};

module.exports = createOtp;
