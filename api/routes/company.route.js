const router = require("express").Router();
const { globalErrorCatcher } = require("../../middlewares/errors");
const {
  getCompany,
  updateCompanyInfo,
  updateCompanyPassword,
  getAllCompanies,
} = require("../controllers/company.controller");
const validateApiAuth = require("../functions/validateApiAuth");

router.get("/", globalErrorCatcher(getCompany));
router.get("/all-companies", globalErrorCatcher(getAllCompanies))
router.patch("/", validateApiAuth, globalErrorCatcher(updateCompanyInfo));
router.post("/", validateApiAuth, globalErrorCatcher(updateCompanyPassword));

module.exports = router;
