const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name:"Sample",
    api_key:"874837483274837",
    api_secure:"a676b67565c6767a6767d6767f676fe1",
    secure:true
})
module.exports=cloudinary