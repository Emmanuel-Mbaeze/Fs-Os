const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName:{
        type:String,
        required:true,
        unique:true
    },
    carNumber:{
        type:Number,
        required:true,
        unique:true
    },
    image: {
        type:String,
        required: true
    },
    cloud_id:{
        type:String, 
    },
    cloud_url:{
        type:String,
    }
})
module.exports=mongoose.model("carCollection",carSchema)