import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

import dotenv from "dotenv";
dotenv.config();

import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();
app.set("trust proxy", 1);

// Rate Limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests. Please try again later."
  },
});

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Routes
app.use("/api/contact", contactLimiter, contactRoutes);

app.use("/api-docs", 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerSpec)
);

// Test Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});