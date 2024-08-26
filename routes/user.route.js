const {
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");

const router = require("express").Router();

// Fetch User data
router.get("/:userId", validateAuth, globalErrorCatcher(getUser));

// Update User data
router.patch("/:userId", validateAuth, globalErrorCatcher(updateUser));

// Delete User data
router.delete("/:userId", validateAuth, globalErrorCatcher(deleteUser));

module.exports = router;
