const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Create OTP
const createOtp = async (userId) => {
  // Generate a six-digit OTP
  const otp = generateOtp();

  // Blacklist all unused OTPs associated with the user
  await blacklistUnusedOtps(userId);

  // Store the new OTP in the database
  const newOtp = await storeOtpInDb(userId, otp);

  return newOtp.otp;
};

// Utility function to generate a six-digit OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

// Utility function to blacklist unused OTPs
const blacklistUnusedOtps = async (userId) => {
  await prisma.otp.updateMany({
    where: {
      userId,
      used: false, // Update only unused OTPs
    },
    data: {
      used: true,
    },
  });
};

// Utility function to store OTP in the database
const storeOtpInDb = async (userId, otp) => {
  return await prisma.otp.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      otp,
    },
  });
};

module.exports = createOtp;
