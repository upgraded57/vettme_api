const {
  getNotifications,
  getNotification,
} = require("../controllers/notification.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");
const router = require("express").Router();

// Get notifications
router.get("/", validateAuth, globalErrorCatcher(getNotifications));

// Get notifications
router.get(
  "/:notificationId",
  validateAuth,
  globalErrorCatcher(getNotification)
);

module.exports = router;
