const mongoose = require("mongoose")
const url = "mongodb://localhost/carDB"
mongoose.connect(url).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})