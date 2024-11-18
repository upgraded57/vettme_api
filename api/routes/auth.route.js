const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  signup,
  activateAccount,
  login,
  requestLink,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/login", globalErrorCatcher(login));

router.post("/signup", globalErrorCatcher(signup));

router.post("/activate", globalErrorCatcher(activateAccount));

router.post("/resend-link", globalErrorCatcher(requestLink));

router.post("/forgot-password", globalErrorCatcher(forgotPassword));

router.post("/reset-password", globalErrorCatcher(resetPassword));

module.exports = router;
