const router = require("express").Router();
const {
  verifyotp,
  signup,
  login,
  resendOtp,
  verifyUserData,
} = require("../controllers/auth.controller.js");
const { globalErrorCatcher } = require("../middlewares/errors.js");

// Create user
router.post("/signup", globalErrorCatcher(signup));

// Login
router.post("/login", globalErrorCatcher(login));

// Resend OTP
router.post("/resendotp", globalErrorCatcher(resendOtp));

// Validate OTP on signup
router.post("/verifyotp", globalErrorCatcher(verifyotp));

// Verify User
router.post("/verifyuser", globalErrorCatcher(verifyUserData));

// destroy token on logout

module.exports = router;
