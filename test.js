const { appendFile } = require("fs")
const http = require(`http`)
const port = 1122
const plaintext = (req, res)=>{
    res.end("okon")
}
const app=http.createServer(plaintext);
    app.listen(port,()=>{
        console.log("mallam"+port)
    })