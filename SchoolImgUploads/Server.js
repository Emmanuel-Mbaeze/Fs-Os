require("./Connect/Connect")
const express = require("express")
const Route = require("./Router/Router")
const PORT = 4321
const app = express()
app.use("/api",Route)
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Connecting to....... ${PORT}`);
})