require("dotenv").config({ path: "../.env" });
const crypto = require("crypto");
const { PrismaClient } = require("../../prisma/generated/api-client");
const axios = require("axios");
const BadRequestException = require("../../exceptions/bad-requests");
const ServerErrorException = require("../../exceptions/server-error");
const {
  paymentErrors,
  serverErrors,
} = require("../../exceptions/status-codes");

const prisma = new PrismaClient({ log: ["warn", "error"] });

const createPayment = async (req, res) => {
  const { amount } = req.body;
  const company = req.company;

  if (!amount)
    throw new BadRequestException(
      "Amount not provided",
      paymentErrors.AMOUNT_NOT_PROVIDED
    );

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      { email: company.email, amount: parseInt(amount) * 100 },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_API_TEST_SECRET_KEY}`,
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
  const secret = process.env.PAYSTACK_API_TEST_SECRET_KEY;
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
      const company = await prisma.company.findUnique({
        where: { email: event.data.customer.email },
      });
      const verificationCost = event.data.amount / 100;
      await prisma.company.update({
        where: {
          id: company.id,
        },
        data: { balance: company.balance + verificationCost },
      });

      await prisma.transaction.create({
        data: {
          company: {
            connect: {
              company: {
                id: company.id,
              },
            },
          },
          type: "topup",
          amount: response.data.data.amount / 100,
          status: "success",
        },
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
    await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_API_TEST_SECRET_KEY}`,
      },
    });

    res
      .status(200)
      .json({ status: "success", message: "Payment verified successfully" });
  } catch (error) {
    res.status(500).json({
      status: "failure",
      message: "Payment verification failed",
      error: error?.response?.data,
    });
  }
};

const getPaymentHistory = async (req, res) => {
  const company = req.company;
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        companyId: company.id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Transactions found successfully",
      transactions,
    });
  } catch (err) {
    throw new ServerErrorException(
      "Unable to get company transactions",
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
