const {
  getUser,
  deleteUser,
  updateUser,
  reportProblem,
} = require("../controllers/user.controller");
const { globalErrorCatcher } = require("../middlewares/errors");
const validateAuth = require("../middlewares/validate-auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = require("express").Router();

// Fetch User data
router.get("/:userId", validateAuth, globalErrorCatcher(getUser));

// Update User data
router.patch("/:userId", validateAuth, globalErrorCatcher(updateUser));

// Delete User data
router.delete("/:userId", validateAuth, globalErrorCatcher(deleteUser));

// Report a problem
router.post(
  "/problem/report",
  validateAuth,
  upload.array("images", 4),
  globalErrorCatcher(reportProblem)
);

module.exports = router;
