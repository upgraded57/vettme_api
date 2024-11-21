const { PrismaClient } = require("../../prisma/generated/api-client");
const prisma = new PrismaClient({ log: ["warn", "error"] });

// Helper function to create recent activity
const CreateRecentActivity = async ({
  appId,
  companyId,
  service,
  cost,
  status,
  environment,
}) => {
  await prisma.recentActivities.create({
    data: {
      application: { connect: { id: appId } },
      company: { connect: { id: companyId } },
      environment,
      service,
      cost: cost.toString(),
      status,
    },
  });
};

module.exports = CreateRecentActivity;
