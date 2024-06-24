const router = require("express").Router();
const {
  verifyotp,
  signup,
  login,
  resendOtp,
  verifyUserData,
  logout,
} = require("../controllers/auth.controller.js");

// Create user
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Resend OTP
router.post("/resendotp", resendOtp);

// Validate OTP on signup
router.post("/verifyotp", verifyotp);

// Verify User
router.post("/verifyuser", verifyUserData);

// destroy token on logout

module.exports = router;
