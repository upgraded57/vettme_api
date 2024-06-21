const { getUser, deleteUser } = require("../controllers/user.controller");

const router = require("express").Router();
// Fetch User data
router.get("/:user_id", getUser);

// Update User data

// Delete User data
router.delete("/:user_id", deleteUser);

module.exports = router;
