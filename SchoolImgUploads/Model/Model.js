const mongoose = require ("mongoose")
const schoolSchema = mongoose.Schema({
    schoolName:{
        required:true,
        type:String,
        unique:true
    },
    schoolLocation:{
        required:true,
        type:String,
    },
    image:{
        required:true,
        type:String,
        unique:true
    },  
    Date:{
        type:Date,
        default:new Date
    },
      cloud_id:{
        type:String, 
    },
    cloud_url:{
        type:String,
    }
})
module.exports=mongoose.model("schoolCollection",schoolSchema)
