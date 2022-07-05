require("./connect")
const express = require("express")
const app = express()
const port = 2300
const route = require("./router")


app.use(express.json())
app.use('', express.static('./uploads'))
app.use("/", route)

app.listen(port, () => {
    console.log("Running", port);
})