import mongoose from "mongoose";

// Define the schema - structure of each job document
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true, // e.g., "0-2 years", "2-5 years"
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "closed", "on-hold"],
      default: "open",
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    closingDate: {
      type: Date,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Create and export the Job model
const Job = mongoose.model("Job", jobSchema);

export default Job;
