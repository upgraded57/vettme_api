const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../../.env" });
const BadRequestException = require("../../exceptions/bad-requests");

// Admin login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestException("Authentication data not provided", null);

  // Compare passwords
  if (
    email !== process.env.ADMIN_EMAIL ||
    !bcrypt.compareSync(password, process.env.ADMIN_PASSWORD)
  ) {
    throw new BadRequestException("Incorrect login credentials", null);
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_KEY, {
    expiresIn: "24h",
  });

  return res.status(200).json({
    status: "success",
    message: "Admin login successful",
    token,
  });
};

module.exports = { login };
