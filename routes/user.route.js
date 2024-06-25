const { getUser, deleteUser } = require("../controllers/user.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");

const router = require("express").Router();
// Fetch User data

router.get("/:user_id", validateAuth, globalErrorCatcher(getUser));

// Update User data

// Delete User data
router.delete("/:user_id", validateAuth, globalErrorCatcher(deleteUser));

module.exports = router;
