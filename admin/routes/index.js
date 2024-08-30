const router = require("express").Router();
const notificationsRoute = require("../routes/notifications.route.js");

router.get("/", (req, res) => {
  res.send("API working");
});
router.use("/notifications", notificationsRoute);

module.exports = router;
