const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  createApp,
  getApps,
  getAppLogs,
  deleteApp,
  getRecentLogs,
} = require("../controllers/app.controller");
const validateApiAuth = require("../functions/validateApiAuth");
const router = require("express").Router();

router.post("/", validateApiAuth, globalErrorCatcher(createApp));
router.get("/", validateApiAuth, globalErrorCatcher(getApps));
router.get("/recent", validateApiAuth, globalErrorCatcher(getRecentLogs));
router.get("/:appId", validateApiAuth, globalErrorCatcher(getAppLogs));
router.delete("/:appId", validateApiAuth, globalErrorCatcher(deleteApp));

module.exports = router;
