const fs = require(`fs`)
fs.appendFile("../student.txt","\3..toheeb",(error, data)=>{
    if(error){
        console.log("cannot write file"+error)
    }else{
        console.log("file sucesful")
    }
})