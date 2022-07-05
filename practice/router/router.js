const express = require("express")
const route = express.Router()
const {createCar}  = require("../controller/controller")
route.post("/create", createCar)
module.exports=route