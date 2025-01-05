const express = require('express');
const router = express.Router();
const Job = require('../model/job'); // Assuming you have a Job model

// Post a new job
router.post('/jobs', async (req, res) => {
  try {
    const { title, description, company, location, salary } = req.body;

    const newJob = new Job({
      title,
      description,
      company,
      location,
      salary,
    });

    await newJob.save();
    console.log('Job saved:', newJob); // Log the saved job
    res.status(201).send('Job posted successfully');
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).send('Error posting job');
  }
});

// In your jobController.js or server.js file
router.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.find(); // Fetch all jobs
      res.json(jobs); // Send jobs to the frontend
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).send('Error fetching jobs');
    }
  });

  // Get job by ID
  router.get('/jobs/:id', async (req, res) => {
    try {
      const jobId = req.params.id; // Extract the job ID from the URL
      const job = await Job.findById(jobId); // Query the database by ID
  
      if (!job) {
        return res.status(404).send('Job not found'); // Handle case where the job doesn't exist
      }
  
      res.json(job); // Send the job data as JSON
    } catch (error) {
      console.error('Error fetching job:', error);
      res.status(500).send('Error fetching job'); // Handle server errors
    }
  });
  
  

module.exports = router;
