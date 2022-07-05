const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    carName:{
        type:String,
        required:true
    },
    carYear:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model("carCollection", carSchema)



// const mongoose = require ("mongoose")
// const carSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     year:{
//         type:String,
//         required:true
//     }
// })
// module.exports=mongoose.model("carCollections",carSchema)



// const mongoose = require ("mongoose")
// const carSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     carYear:{
//         type:Number,
//         required:true
//     }
// })
// module.exports= mongoose.model("carCollections",carSchema)



// const mongoose = require ("mongoose")
// const carSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     year:{
//         type:Number,
//         required:true
//     }
// })
// module.exports=mongoose.model("carColllection",carSchema)



// const mongoose = require("mongoose")
// const carSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     year:{
//         type:Number,
//         required:true
//     }
// })
// module.exports=mongoose.model("carCollection",carSchema)