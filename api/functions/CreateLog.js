const { PrismaClient } = require("../../prisma/generated/api-client");
const prisma = new PrismaClient({ log: ["warn", "error"] });

// Helper fucntion to create log
const CreateLog = async ({ appId, service, statusCode, environment }) => {
  await prisma.log.create({
    data: {
      application: { connect: { id: appId } },
      service,
      statusCode,
      environment,
    },
  });
};

module.exports = CreateLog;
