import express from "express";
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

// Routes
router.get("/", getAllJobs);           // GET all jobs
router.get("/:id", getJobById);        // GET job by ID
router.post("/", createJob);           // CREATE new job
router.put("/:id", updateJob);         // UPDATE job
router.delete("/:id", deleteJob);      // DELETE job

export default router;
