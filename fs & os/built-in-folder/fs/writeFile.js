const fs = require(`fs`)
fs.writeFile("../student.txt","6.precious",(error, data)=>{
    if(error){
        console.log("cannot write file"+error)
    }else{
        console.log("file succeseful")
    }
})
