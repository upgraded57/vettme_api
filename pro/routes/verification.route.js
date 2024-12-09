const {  createVerificationForm } = require("../controllers/Verification.controller");

const router = require("express").Router();

//Create user
router.post("/create-form", createVerificationForm);

module.exports = router;
