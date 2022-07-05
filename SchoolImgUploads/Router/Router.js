const express = require ("express")
const Route = express.Router()
const {createSchool}=require("../Contoller/Contoller")
const imageUploader=require("../Multer/Multer")
Route.post("/postSchool",imageUploader,createSchool)
module.exports=Route