require("./Connect/connect")
const express = require("express")
const route = require("./Router/router")
const PORT =2000
const  app = express()
app.use(express.json())
app.use("/api",route)
app.listen(PORT,()=>{
    console.log(`connecting.. to ${PORT}`);
})
       