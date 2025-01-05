const application = require("../model/formData");



exports.addApplicationController = async(req, res)=>{
  console.log('inside add application controller');

  const {name, email, phone, address} = req.body
  console.log(name, email, phone, address);
  
  const resume= req.file.filename
  console.log(resume);
  const userId = req.payload
  
  try {
    const existingFormData= await application.findOne({email})
    if(existingFormData){
      res.status(406).json('Already exist')
    }
    else{
      const newFormData = new application({
        name, email, phone, address, resume, userId
      })
      await newFormData.save()
      res.status(200).json(newFormData)
    }
  } catch (error) {
    res.status(401).json('Form data adding failed due to ',error)
    
  }
 
  
}

//get all formData

exports.getAllApplicationController = async(req,res)=>{
  try {

    const allFormData = await application.find()
    res.status(200).json(allFormData)
    
  } catch (error) {
    res.status(401).json(error)
    
  }
}