const mongoose = require("mongoose");
const { create } = require("./bug");

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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  team_name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);