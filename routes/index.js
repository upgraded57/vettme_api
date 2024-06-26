const router = require("express").Router();
const authRouter = require("./auth.route.js");
const userRouter = require("./user.route.js");
const vettRouter = require("./vett.route.js");
const paymentRouter = require("./payment.route.js");
const cors = require("cors");

router.get("/", (req, res) => {
  res.send("API working");
});
router.use("/auth", authRouter);
router.options("/auth", cors());
router.use("/user", userRouter);
router.use("/vett", vettRouter);
router.use("/payment", paymentRouter);

module.exports = router;
