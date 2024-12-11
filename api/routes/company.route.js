const router = require("express").Router();
const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  getCompany,
  updateCompanyInfo,
  updateCompanyPassword,
} = require("../controllers/company.controller");
const validateApiAuth = require("../functions/validateApiAuth");

router.get("/", validateApiAuth, globalErrorCatcher(getCompany));
router.patch("/", validateApiAuth, globalErrorCatcher(updateCompanyInfo));
router.post("/", validateApiAuth, globalErrorCatcher(updateCompanyPassword));

module.exports = router;
