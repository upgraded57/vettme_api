const { globalErrorCatcher } = require("../../middlewares/errors");
const validateAdminAuth = require("../../middlewares/validate-admin-auth");
const {
  getUsers,
  deactivateUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/",  globalErrorCatcher(getUsers));

router.patch(
  "/:userId/deactivate",
  validateAdminAuth,
  globalErrorCatcher(deactivateUser)
);

router.delete(
  "/:userId/deactivate",
  validateAdminAuth,
  globalErrorCatcher(deleteUser)
);

module.exports = router;
