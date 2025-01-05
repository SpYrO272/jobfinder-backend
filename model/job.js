const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: { 
    type: String, 
    required: true 
},
  jobDescription: { 
    type: String, 
    required: true 
},
  location: { 
    type: String, 
    required: true 
},
  salary: { 
    type: Number, 
    required: true 
},
  jobType: { 
    type: String, 
    required: true 
},
  deadline: { 
    type: String, 
    required: true 
},
  experience: { 
    type: Number, 
    required: true 
},
  postedDate: { 
    type: String, 
    required: true 
},
company:{
    type:String,
    required:true
}
});

module.exports = mongoose.model('job', jobSchema);
