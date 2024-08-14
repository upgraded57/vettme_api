const {
  createPayment,
  paymentStatus,
} = require("../controllers/payment.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");

const router = require("express").Router();
// Accept payment
router.post("/topup", validateAuth, globalErrorCatcher(createPayment));

// Payment webhook
router.post("/webhook", paymentStatus);

// Verify payment
router.get("/verify/:reference", validateAuth, globalErrorCatcher());

// Fetch payment history

// Fetch single payment data

module.exports = router;
