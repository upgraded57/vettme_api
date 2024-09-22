const { globalErrorCatcher } = require("../../middlewares/errors");
const validateAdminAuth = require("../../middlewares/validate-admin-auth");
const {
  createGeneralNotification,
  createTargetedNotification,
  getNotifications,
} = require("../controllers/notifications.controller");

const router = require("express").Router();

router.get("/", validateAdminAuth, globalErrorCatcher(getNotifications));

router.post(
  "/general",
  validateAdminAuth,
  globalErrorCatcher(createGeneralNotification)
);

router.delete(
  "/:notificationId",
  validateAdminAuth,
  globalErrorCatcher(createTargetedNotification)
);

module.exports = router;
