// const http = require("http");
// const port = 2047;
// const plainText = (req, res)=>{
//     res.end("server");
// }
// const app = http.createServer(plainText);
// app.listen(port, ()=>{
//     console.log("listening on port"  +port);
// });

// const http = require ("http")

// const port = 3030

// const server = http.createServer((req, res)=>{
//     res.end("server created")
// })

// server.listen(port, ()=>{
//     console.log("listening to server", port)

// })
const http = require("http")
const port = 4000;
const plainText = (req, res)=>{
  res.end("cynthia is a tech guru")
}
const app = http.createServer(plainText);
app.listen(port,()=>{
    console.log("mallam"+port)
})
