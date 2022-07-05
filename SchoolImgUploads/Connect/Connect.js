const mongoose = require("mongoose")
const url ="mongodb://localhost/schoolSchemaDB"
mongoose.connect (url).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err.message);
})