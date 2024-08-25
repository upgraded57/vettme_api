const router = require("express").Router();
const {
  verifyotp,
  signup,
  login,
  resendOtp,
  verifyUserData,
  resetPassword,
  getUserWithEmail,
  resendRecoveryOtp,
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

// Find user account with email fro account recovery
router.post("/recovery", globalErrorCatcher(getUserWithEmail));

// Find user account with email fro account recovery
router.post("/resendrecoveryotp", globalErrorCatcher(resendRecoveryOtp));

// Reset Password.
router.post("/resetpassword", globalErrorCatcher(resetPassword));

module.exports = router;
