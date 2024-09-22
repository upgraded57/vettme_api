const { globalErrorCatcher } = require("../../middlewares/errors");
const validateAdminAuth = require("../../middlewares/validate-admin-auth");
const { getVerifications } = require("../controllers/verifications.controller");

const router = require("express").Router();

router.get("/", validateAdminAuth, globalErrorCatcher(getVerifications));

module.exports = router;
