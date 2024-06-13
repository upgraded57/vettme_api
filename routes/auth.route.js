const router = require("express").Router();
const {
  verifyotp,
  signup,
  login,
} = require("../controllers/auth.controller.js");

// Create user
router.post("/signup", signup);

// Login
router.post("/login", login);

// Validate OTP on signup
router.post("/verifyotp", verifyotp);

// destroy token on logout

module.exports = router;
