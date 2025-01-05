const multer =require('multer')

//create disk storage
const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, './uploads')
    },
    filename:(req, file,callback)=>{
        const filename = `pdf- ${Date.now()}-${file.originalname}`
        callback(null, filename)
    }

})

//file filter

const filefilter = (req, file, callback)=>{
    if(file.mimetype =='application/pdf'){
        callback(null, true)
    }
    else{
        callback(null, false)
        return callback(new Error('Only pdf fiels are allowed'))
    }
}
//multer configuration
const multerConfig = multer({
    storage,
    filefilter
})

//export
module.exports = multerConfig