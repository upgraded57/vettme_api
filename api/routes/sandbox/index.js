const { sandboxBvn } = require("../../controllers/sandbox/bvn.controller");
const { globalErrorCatcher } = require("../../../middlewares/errors");
const validateAppID = require("../../../middlewares/validate-app-id");
const validatePublicKey = require("../../../middlewares/validate-public-key");
const { sandboxNin } = require("../../controllers/sandbox/nin.controller");
const {
  sandboxPhoneNumber,
} = require("../../controllers/sandbox/phone-number.controller");
const {
  sandboxDriversLicense,
} = require("../../controllers/sandbox/drivers-license.controller");
const {
  sandboxAccountNumber,
} = require("../../controllers/sandbox/account-number.controller");
const { sandboxEmail } = require("../../controllers/sandbox/email.controller");
const {
  sandboxVin,
} = require("../../controllers/sandbox/voters-id.controller");

const router = require("express").Router();

router.get(
  "/bvn",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxBvn)
);

router.get(
  "/nin",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxNin)
);

router.get(
  "/phone-number",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxPhoneNumber)
);

router.get(
  "/drivers-license",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxDriversLicense)
);

router.get(
  "/account-number",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxAccountNumber)
);

router.get(
  "/email",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxEmail)
);
router.get(
  "/vin",
  validateAppID,
  validatePublicKey,
  globalErrorCatcher(sandboxVin)
);

module.exports = router;
