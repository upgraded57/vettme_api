const router = require("express").Router();
const notificationsRoute = require("../routes/notifications.route.js");
const usersRoute = require("../routes/users.route.js");
const authRoute = require("../routes/auth.route.js");
const verificationsRoute = require("../routes/verifications.route.js");

router.get("/", (req, res) => {
  res.send("API working");
});
router.use("/auth", authRoute);
router.use("/notifications", notificationsRoute);
router.use("/users", usersRoute);
router.use("/verifications", verificationsRoute);

module.exports = router;
