import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});