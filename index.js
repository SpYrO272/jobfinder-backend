//import .env
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors= require('cors')

//import router
const router = require('./router')

//import appmiddleware
// const appMiddleware = require('./middleware/appMiddleware')

//import connect
 require('./connection')

//create server
const jbServer = express()

//server using cors
jbServer.use(cors())

//parse the data - middleware - parse the data
jbServer.use(express.json())

// jbServer.use(appMiddleware)

//use router
jbServer.use(router)

//port
const PORT = 5000 || process.env.PORT

//listen
jbServer.listen(PORT,()=>{
    console.log(`server running successfully at por number ${PORT}`);
    
})

//get

jbServer.get('/',(req,res)=>{
    res.send('get request recievded')
})