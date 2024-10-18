const Bug = require("../models/bug");
const User = require("../models/user")

exports.getAllBugs = async (req, res) => {
  const { userID } = req.query;
  if(!userID) {
    console.log(req.query)
    return res.status(400).json({ message: "User ID is required" });
  }
  try{
    const bugs = await Bug.find({ created_by: userID });
    res.status(200).json(bugs);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getBug = async (req, res) => {
  const { bugID } = req.params;
  try {
    const bug = await Bug.findById(bugID);
    if(!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json(bug);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createBug = async (req, res) => {
  const { title, repository_name, expected_behavior, actual_behavior, steps_to_reproduce, screenshot_url, pr_link, additional_comments } = req.body;
  const created_by = req.user.id;
  try {
    const bug = await Bug.create({ title, repository_name, expected_behavior, actual_behavior, steps_to_reproduce, screenshot_url, pr_link, additional_comments, created_by });
    res.status(201).json(bug);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateBug = async (req, res) => {
  const { bugID } = req.params;
  const { title, repository_name, expected_behavior, actual_behavior, steps_to_reproduce, screenshot_url, pr_link, additional_comments } = req.body;
  try {
    const bug = await Bug.findByIdAndUpdate(bugID, { title, repository_name, expected_behavior, actual_behavior, steps_to_reproduce, screenshot_url, pr_link, additional_comments }, { new: true });
    if(!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(200).json(bug);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteBug = async (req, res) => {
  const { bugID } = req.params;
  try {
    const bug = await Bug.findByIdAndDelete(bugID);
    if(!bug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    res.status(204).json({ message: "Bug deleted successfully" });
  }
  catch(err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.changePoints = async (req, res) => {
  const { userID, points } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userID, { points }, { new: true });
    if(!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}