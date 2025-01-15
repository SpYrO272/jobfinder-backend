const express = require('express');
const router = express.Router();
const Job = require('../model/job');

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
    console.log('Job saved:', newJob); 
    res.status(201).send('Job posted successfully');
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).send('Error posting job');
  }
});


router.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.find(); 
      res.json(jobs); 
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).send('Error fetching jobs');
    }
  });

  // Get job by ID
  router.get('/jobs/:id', async (req, res) => {
    try {
      const jobId = req.params.id; 
      const job = await Job.findById(jobId); 
  
      if (!job) {
        return res.status(404).send('Job not found'); 
      }
  
      res.json(job); 
    } catch (error) {
      console.error('Error fetching job:', error);
      res.status(500).send('Error fetching job'); 
    }
  });
  
  

module.exports = router;
