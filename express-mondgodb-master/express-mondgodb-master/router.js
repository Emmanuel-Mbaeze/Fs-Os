const express = require("express")
const route = express.Router()
const {createCar, getAllCars, updateCar, findOneCar, deleteCar, allCars} = require("./controller")

//route to create
route.post("/create", createCar)

//get/read all cars
route.get("/get", getAllCars)

//route to update
route.patch("/:id", updateCar)

//route to find one car by the id
route.get("/:id", findOneCar)

//route to delete
route.delete("/:id", deleteCar)
module.exports = route

// const express= require("express")
// const {createCar}=require("./controller")
// const route = express.Router()
// route.post("./create",createCar)
// module.exports=route

const express = require("express")
const route = express.Router()
const {createCar,allCars}= require("./controller")
route.post("./create",createCar)
route.get("./get",allCars)
module.exports= route