const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
