require("dotenv").config({ path: "../.env" });
const crypto = require("crypto");
const { PrismaClient } = require("@prisma/client");
const axios = require("axios");
const BadRequestException = require("../exceptions/bad-requests");
const ServerErrorException = require("../exceptions/server-error");
const { paymentErrors, serverErrors } = require("../exceptions/status-codes");
const findUser = require("../functions/findUser");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const createPayment = async (req, res) => {
  const { amount } = req.body;
  if (!amount)
    throw new BadRequestException(
      "Amount not provided",
      paymentErrors.AMOUNT_NOT_PROVIDED
    );

  const user = await findUser({ token: req.headers.token });
  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      { email: user.email, amount: parseInt(amount) * 100 },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_LIVE_SECRET_KEY}`,
        },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Payment session initialized successfully",
      data: response.data.data,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Could not make payment",
      paymentErrors.PAYSTACK_FAILED_PAYMENT,
      error.response?.data?.message
    );
  }
};

const paymentStatus = async (req, res) => {
  const secret = process.env.PAYSTACK_LIVE_SECRET_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res
      .status(400)
      .json({ status: "failure", message: "Invalid signature" });
  }

  const event = req.body;
  if (event.event === "charge.success") {
    try {
      const user = await prisma.user.findUnique({
        where: { email: event.data.customer.email },
      });
      const verificationCost = (event.data.amount / 100) * 300;
      await prisma.user.update({
        where: { email: user.email },
        data: { balance: user.balance + verificationCost },
      });
    } catch (error) {
      console.log("Account topup error", error);
    }
  }

  res
    .status(200)
    .json({ status: "success", message: "Payment successful", event });
};

const verifyPayment = async (req, res) => {
  const { reference } = req.params;
  if (!reference)
    return res
      .status(400)
      .json({ status: "error", message: "Reference code not provided" });

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_LIVE_SECRET_KEY}`,
        },
      }
    );

    const user = await prisma.user.findUnique({
      where: { email: response.data.data.customer.email },
    });
    if (!user)
      return res.status(500).json({
        status: "failure",
        message: "Cannot find user with the specified email",
      });

    await prisma.transaction.create({
      data: {
        userId: user.id,
        type: "topup",
        amount: response.data.data.amount / 100,
        status: "success",
      },
    });

    res
      .status(200)
      .json({ status: "success", message: "Payment verified successfully" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Payment verification failed",
      error,
    });
  }
};

const getPaymentHistory = async (req, res) => {
  const user = await findUser({ token: req.headers.token });
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
    });
    res.status(200).json({
      status: "success",
      message: "User transactions found successfully",
      transactions,
    });
  } catch (err) {
    throw new ServerErrorException(
      "Unable to get user transactions",
      serverErrors.UNKNOWN_ERROR,
      err
    );
  }
};

module.exports = {
  createPayment,
  paymentStatus,
  verifyPayment,
  getPaymentHistory,
};
