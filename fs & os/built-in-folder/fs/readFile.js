const fs = require(`fs`)
fs.readFile("../student.txt",(error, data)=>{
    if(error){
        console.log("cannot read file")
    }else{
        console.log(data.toString())
        console.log(data)
    }
});