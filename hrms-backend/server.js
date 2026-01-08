import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Welcome to HRMS Recruitment API",
    version: "1.0.0",
    endpoints: {
      jobs: "/api/jobs",
      health: "/health"
    }
  });
});

// Routes
app.use("/api/jobs", jobRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// 404 Error handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});