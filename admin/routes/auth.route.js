const { globalErrorCatcher } = require("../../middlewares/errors");
const { login } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/login", globalErrorCatcher(login));

module.exports = router;
