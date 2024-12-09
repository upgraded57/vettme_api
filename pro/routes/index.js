const router = require("express").Router();
const authRoute =  require('./auth.route.js')
const verificationRoute = require('./verification.route.js')
const verificationResponseRoute = require('./verificaionResponse.route.js')

router.use("/auth", authRoute)
router.use("/verification", verificationRoute)
router.use("/verification-response", verificationResponseRoute)

module.exports = router;