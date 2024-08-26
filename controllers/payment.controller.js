require("dotenv").config({
  path: "../.env",
});
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const axios = require("axios");
const ServerErrorException = require("../exceptions/server-error");
const {
  paymentErrors,
  loginErrors,
  serverErrors,
} = require("../exceptions/status-codes");
const UnauthorizedRequestException = require("../exceptions/unauthorized");
const BadRequestException = require("../exceptions/bad-requests");

const prisma = new PrismaClient({
  log: ["warn", "error"],
});

const createPayment = async (req, res) => {
  const { amount } = req.body;
  const { token } = req.headers;

  //Get user id from request token
  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  //Find user with token
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new UnauthorizedRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  //Attempt to make payment
  if (!amount) {
    throw new BadRequestException(
      "Amount not provided",
      paymentErrors.AMOUNT_NOT_PROVIDED
    );
  }

  //Parse amount

  try {
    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email: user.email,
        amount: parseInt(amount) * 100, // Paystack uses kobo as the currency base, so multiply by 100
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        },
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Payment session initialized successfully",
      data: response.data.data,
    });
  } catch (error) {
    throw new ServerErrorException(
      "Could not make payment",
      paymentErrors.PAYSTACK_FAILED_PAYMENT,
      error.response.data.message
    );
  }
};

const paymentStatus = async (req, res) => {
  const secret = process.env.PAYSTACK_TEST_SECRET_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash === req.headers["x-paystack-signature"]) {
    // Retrieve the request's body
    const event = req.body;

    // Handle the event
    if (event.event === "charge.success") {
      // Payment was successful
      // You can update your database here
      console.log("Payment successful:", event.data);
    }

    return res.status(200).json({
      status: "success",
      message: "payment successful",
      event,
    });
  } else {
    return res.status(400).json({
      status: "failure",
      message: "Invalid signature",
    });
  }
};

const verifyPayment = async (req, res) => {
  const { reference } = req.params;
  if (!reference)
    return res.status(400).json({
      status: "error",
      message: "Reference code not provided",
    });

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_TEST_SECRET_KEY}`,
        },
      }
    );

    const userEmail = response.data.data.customer.email;

    // Query database for user
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user)
      return res.status(500).json({
        status: "failure",
        message: "Cannot find user with the specified email",
      });

    // Update user balance in database
    const topupAmount = parseInt(response.data.data.amount) / 100;
    const previousBalance = parseInt(user.balance);
    try {
      // Update user balance
      await prisma.user.update({
        where: { id: user.id },
        data: {
          balance: previousBalance + topupAmount,
        },
      });

      // Create a transaction record for user
      await prisma.transaction.create({
        data: {
          user: {
            connect: {
              id: userId,
            },
          },
          type: "topup",
          amount: topupAmount,
          status: "success",
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: "Unable to update user balance",
        error: err,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Payment verified successfully",
    });
  } catch (error) {
    // Create a transaction record for user
    await prisma.transaction.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        type: "topup",
        amount: topupAmount,
        status: "failure",
      },
    });

    return res.status(500).json({
      status: "failure",
      message: "Payment verification failed",
      error,
    });
  }
};

const getPaymentHistory = async (req, res) => {
  const { token } = req.headers;

  //Get user id from request token
  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  //Find user with token
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new UnauthorizedRequestException(
      "User does not exist",
      loginErrors.USER_DOES_NOT_EXIST
    );
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Use transactions found successfully",
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
