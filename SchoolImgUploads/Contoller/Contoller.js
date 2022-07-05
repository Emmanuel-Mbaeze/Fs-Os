const schoolModel = require ("../Model/Model")
const cloudinary = require("../config/cloudinary")
const fs = require("fs")
const createSchool = async(req,res)=>{
try {
    const result = await cloudinary.uploader.upload(req.file.path)
    const newSchool =await schoolModel.create({
        schoolName:req.body.schoolName,
        schoolLocation:req.body.schoolLocation,
        schoolImage:req.file.path,
        cloud_url:result.secure_url,
        cloud_id:result.public_id
      })
      console.log(result);
      res.status(200).json({
          status:"Successful",
          data:newSchool
      })
} catch (error) {
 req.status(404).json({
    status:"Failure",
    message:failure in creating
 })
}
}
module.exports={
    createSchool
}