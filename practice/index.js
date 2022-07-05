const express = require("express")
const PORT = 2047
const myRoute = require("./router/router")
const  app = express()
const mongoose = require("mongoose") 
const url = "mongodb://localhost/carDB"
mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err.message);
})
app.use(express.json())
app.use("/api",myRoute)
app.listen(PORT,()=>{
    console.log(`connecting + ${PORT}`)
})

