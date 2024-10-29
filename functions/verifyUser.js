// Collect user id
// Get user id from db
// Compare user supplied name to nin
// If equivalent, user will be verified, else user will be unverified

const axios = require("axios");
const { PrismaClient } = require("../prisma/generated/app-client");
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

const verifyUser = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  const userNin = user.nin;

  // Send request to dojah.io to fetch user info
  try {
    // const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // if (res.status !== 200) return false;
    // const userNinData = res.data;
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = verifyUser;
