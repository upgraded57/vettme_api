const router = require("express").Router();
const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  getPaymentHistory,
  createPayment,
  paymentStatus,
  verifyPayment,
} = require("../controllers/payment.controller");

const validateApiAuth = require("../functions/validateApiAuth");

router.get("/", validateApiAuth, globalErrorCatcher(getPaymentHistory));
router.post("/create", validateApiAuth, globalErrorCatcher(createPayment));
router.post("/webhook", globalErrorCatcher(paymentStatus));
router.get(
  "/verify/:reference",
  validateApiAuth,
  globalErrorCatcher(verifyPayment)
);

module.exports = router;
