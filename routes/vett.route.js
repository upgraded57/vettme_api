const {
  verifyPersonnel,
  getVerifications,
} = require("../controllers/vett.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");

const router = require("express").Router();
// Get User verification history
router.get("/", validateAuth, globalErrorCatcher(getVerifications));

// Initiate Verification
router.post("/", validateAuth, globalErrorCatcher(verifyPersonnel));

module.exports = router;
