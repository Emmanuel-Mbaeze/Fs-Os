const express = require ("express")
const route = express.Router()
const {createCar} = require("../Controller/controller")
const imageUploader = require("../Multer/multer")
route.post("/PostCar", imageUploader,createCar)
module.exports=route
