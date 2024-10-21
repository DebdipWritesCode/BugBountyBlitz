const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: process.env.CORS_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));

const authRoutes = require("../routes/authRoutes");
const bugRoutes = require("../routes/bugRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/bugs", bugRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

startServer();
