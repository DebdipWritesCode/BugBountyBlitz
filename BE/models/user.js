const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    max: 10,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);