const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
  name:
  { 
    type: String, 
    required: true 
  },
  email: 
  { 
    type: String, 
    required: true 
  },
  phone: 
  { 
    type: String, 
    required: true 
  },
  address: 
  { 
    type: String, 
    required: true 
  },
  resume: 
  { 
    required:true,
    type: String 

  }, 
  userId: 
  { 
    type: String, 
    required: true
  } 
})

// Create the model
const application = mongoose.model('application', applicationSchema);

module.exports = application;
