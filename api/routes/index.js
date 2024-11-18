const router = require("express").Router();
const authRoute = require("./auth.route.js");
const sandboxRoute = require("./sandbox/index.js");
const liveRoute = require("./live/index.js");
const appRoute = require("./app.route.js");
const companyRoute = require("./company.route.js");
const paymentRoute = require("./payment.route.js");

router.use("/auth", authRoute);
router.use("/sandbox", sandboxRoute);
router.use("/live", liveRoute);
router.use("/company", companyRoute);
router.use("/user/application", appRoute);
router.use("/payment", paymentRoute);

module.exports = router;
