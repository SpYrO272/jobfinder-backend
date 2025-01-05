//import express
const express = require('express')

const job = require('./model/job')

//import userController
const userController = require('./controllers/userController')

//add application controller
const applicationController = require('./controllers/applicationController')

//impiort jwt middleware
const jwtmiddleware = require('./middleware/jwtMiddleware')
//import multer
const multerConfig = require('./middleware/multerMiddleware')

//instance router
const router = new express.Router()

//register
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//add -formdata
router.post('/add-formdata',jwtmiddleware,multerConfig.single("resume"),applicationController.addApplicationController)

//get formdata
router.get('/all-formdata',applicationController.getAllApplicationController)

//get all jobs
router.get('/jobs', async (req, res) => {
    try {
      const jobs = await job.find();
      res.status(200).json(jobs); // Respond with the list of jobs
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).json({ error: 'Failed to fetch jobs' });
    }
  });
  

  //add new job
  router.post('/jobs', async (req, res) => {
    try {
      const Job = new job(req.body);
      const savedJob = await Job.save();
      res.status(201).json(savedJob); // Respond with the saved job
    } catch (error) {
      console.error('Error saving job:', error);
      res.status(500).json({ error: 'Failed to save job' });
    }
  });

  // DELETE route to delete a job by ID
router.delete('/jobs/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the job by ID and delete it
      const deletedJob = await job.findByIdAndDelete(id);
  
      if (!deletedJob) {
        return res.status(404).json({ error: 'Job not found' });
      }
  
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('Error deleting job:', error);
      res.status(500).json({ error: 'Failed to delete job' });
    }
  });

  // Get a job by ID
router.get('/jobs/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const jobFound = await job.findById(id);
      if (!jobFound) {
          return res.status(404).json({ error: 'Job not found' });
      }
      res.status(200).json(jobFound); // Respond with the found job
  } catch (error) {
      console.error('Error fetching job by ID:', error);
      res.status(500).json({ error: 'Failed to fetch job' });
  }
});

  

  
  module.exports = router