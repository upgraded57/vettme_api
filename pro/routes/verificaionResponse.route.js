const { verificationResponse } = require("../controllers/VerificationResponse.controller");

const router = require("express").Router();

//Create user
router.post("/", verificationResponse );

module.exports = router;