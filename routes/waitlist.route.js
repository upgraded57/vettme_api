const {
  getWaitlistUsers,
  createWaitlistUser,
} = require("../controllers/waitlist.controller");

const router = require("express").Router();

// Get all waitlist users
router.get("/", getWaitlistUsers);

// Add user to waitlist
router.post("/", createWaitlistUser);

module.exports = router;
