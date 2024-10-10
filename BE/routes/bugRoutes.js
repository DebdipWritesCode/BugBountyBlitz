const express = require("express");
const { createBug, getAllBugs, getBug, updateBug, deleteBug } = require("../controllers/bugController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", verifyToken, createBug);
router.get("/getAllBugs", verifyToken, getAllBugs);
router.get("/getBug/:bugID", verifyToken, getBug);
router.put("/updateBug/:bugID", verifyToken, updateBug);
router.delete("/deleteBug/:bugID", verifyToken, deleteBug);

module.exports = router;
