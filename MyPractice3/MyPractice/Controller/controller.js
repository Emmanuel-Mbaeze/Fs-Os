const carModel = require("../Model/model")
const cloudinary = require("../config/cloudinary")
const fs = require("fs")
const createCar = async(req,res)=>{
 try {
     const result = await cloudinary.uploader.upload(req.file.path)
    const newCar = await carModel.create({
        carName:req.body.carName,
        carNumber:req.body.carNumber,
        image:req.file.path,
        cloud_url:result.secure_url,
        cloud_id:result.public_id
    })
    console.log(result);
    res.status(201).json({
        status:"success",
        data:newCar
    })
 } catch (err) {
     res.status(404).json({
         status:"error",
         message:"err.message"
     })
 }
}
module.exports={
    createCar
}