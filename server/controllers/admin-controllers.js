const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const adminLoginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found!" });
    }

    // const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!password) {
      return res.status(401).json({ message: "Invalid password!" });
    }

    if (!JWT_SECRET) {
      console.error("JWT secret not configured");
      return res.status(500).json({ message: "Server configuration error" });
    }
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
};

module.exports = { adminLoginController };
