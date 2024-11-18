const { globalErrorCatcher } = require("../../../middlewares/errors");
const validateAppID = require("../../../middlewares/validate-app-id");
const validatePrivateKey = require("../../../middlewares/validate-private-key");
const liveNuban = require("../../controllers/live/account-number.controller");
const liveBvn = require("../../controllers/live/bvn.controller");
const liveDriversLicense = require("../../controllers/live/drivers-license.controller");
const liveEmail = require("../../controllers/live/email.controller");
const liveNin = require("../../controllers/live/nin.controller");
const liveVin = require("../../controllers/live/vin.controller");
const livePhoneNumber = require("../../controllers/live/phone-number.controller");

const router = require("express").Router();

router.get(
  "/bvn",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(liveBvn)
);

router.get(
  "/nin",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(liveNin)
);

router.get(
  "/phone-number",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(livePhoneNumber)
);

router.get(
  "/drivers-license",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(liveDriversLicense)
);

router.get(
  "/account-number",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(liveNuban)
);

// router.get(
//   "/email",
//   validateAppID,
//   validatePrivateKey,
//   globalErrorCatcher(liveEmail)
// );

router.get(
  "/vin",
  validateAppID,
  validatePrivateKey,
  globalErrorCatcher(liveVin)
);

module.exports = router;
