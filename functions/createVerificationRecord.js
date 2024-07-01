const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

const createVerificationRecord = async (
  userId,
  title,
  personnel_name,
  type,
  data
) => {
  const record = await prisma.verification.create({
    data: {
      userId,
      title,
      personnel_name,
      info: data,
      status: "success",
      verified_with: type,
    },
  });

  return record;
};

module.exports = createVerificationRecord;
