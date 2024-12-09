const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  signup,
  login,
  activateAccount,
  requestLink,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const router = require("express").Router();

//Create user
router.post("/signup", globalErrorCatcher(signup));

//Login
router.post("/login", globalErrorCatcher(login));

//Activate account
router.post("/resendotp", globalErrorCatcher(activateAccount));

//Resend Link
router.post("/resend-link", globalErrorCatcher(requestLink));

//Forgot password
router.post("/forgot-password", globalErrorCatcher(forgotPassword));

//Reset password
router.post("/reset-password", globalErrorCatcher(resetPassword));

module.exports = router;
