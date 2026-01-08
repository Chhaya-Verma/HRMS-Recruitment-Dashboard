import Job from "../models/Job.js";

// GET all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching jobs",
      error: error.message,
    });
  }
};

// GET job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    
    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching job",
      error: error.message,
    });
  }
};

// CREATE new job
export const createJob = async (req, res) => {
  try {
    // Check if all required fields are provided
    const { title, description, department, salary, experience, location } =
      req.body;

    if (!title || !description || !department || !salary || !experience || !location) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Create new job
    const newJob = new Job(req.body);
    await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: newJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating job",
      error: error.message,
    });
  }
};

// UPDATE job
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Run schema validation
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating job",
      error: error.message,
    });
  }
};

// DELETE job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting job",
      error: error.message,
    });
  }
};
