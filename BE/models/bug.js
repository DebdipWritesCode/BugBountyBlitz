const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  repository_name: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  expected_behavior: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  actual_behavior: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  steps_to_reproduce: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  screenshot_url: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  pr_link: {
    type: String,
    min: 5,
    max: 255,
  },
  additional_comments: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("Bug", bugSchema);