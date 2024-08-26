const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

const createVerificationRecord = async (
  userId,
  title,
  personnel_name,
  type,
  data,
  status
) => {
  const record = await prisma.verification.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      title,
      personnel_name,
      info: data,
      status,
      verified_with: type,
    },
  });

  return record;
};

module.exports = createVerificationRecord;
