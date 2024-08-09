require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Fetch all users from waitlist
const getWaitlistUsers = async (req, res) => {
  try {
    const users = await prisma.waitlist.findMany();

    if (!users) throw new Error("Users not found");

    res.status(200).json({
      status: "success",
      message: "Users found successfuly",
      users,
    });
  } catch (error) {
    throw new Error("Cannot find users", error);
  }
};
const createWaitlistUser = async (req, res) => {
  const { name, email, phone_number } = req.body;

  if (!name || !email || !phone_number)
    return res.status(400).json({
      status: "error",
      message:
        "All fields required. Required fields: name, email, phone_number",
    });

  try {
    const existingUserWithEmail = await prisma.waitlist.findFirst({
      where: {
        email,
      },
    });
    const existingUserWithPhone = await prisma.waitlist.findFirst({
      where: {
        phone_number,
      },
    });

    if (existingUserWithEmail || existingUserWithPhone)
      return res.status(409).json({
        status: "error",
        message: "You are already a waitlist member",
      });

    const newUser = await prisma.waitlist.create({
      data: { name, email, phone_number },
    });

    if (!newUser)
      return res.status(500).json({
        status: "error",
        message: "Cannot add user to waitlist",
      });

    return res.status(201).json({
      status: "success",
      message: "User added to waitlist",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Cannot add user to waitlist",
    });
  }
};

module.exports = { getWaitlistUsers, createWaitlistUser };
