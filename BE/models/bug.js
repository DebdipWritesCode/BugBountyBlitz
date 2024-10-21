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
  issue_id: {
    type: String,
  },
  pr_link: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

module.exports = mongoose.model("Bug", bugSchema);