const { globalErrorCatcher } = require("../../middlewares/errors");
const validateAdminAuth = require("../../middlewares/validate-admin-auth");
const {
  createGeneralNotification,
  createTargetedNotification,
} = require("../controllers/notifications.controller");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("API working");
});

router.post(
  "/general",
  // validateAdminAuth,
  globalErrorCatcher(createGeneralNotification)
);

router.post(
  "/user/:userId",
  // validateAdminAuth,
  globalErrorCatcher(createTargetedNotification)
);

module.exports = router;
