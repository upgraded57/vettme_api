const { getUser, deleteUser } = require("../controllers/user.controller");
const validateAuth = require("../middlewares/validate-auth");

const router = require("express").Router();
// Fetch User data
router.get("/:user_id", validateAuth, getUser);

// Update User data

// Delete User data
router.delete("/:user_id", validateAuth, deleteUser);

module.exports = router;
