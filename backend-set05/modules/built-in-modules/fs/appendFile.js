const fs = require('fs');

// appending to a file
fs.appendFile("../students.txt", "\n1 gog", (error)=>{
    if(error){
        console.log("can not write the file" + error)
    }else{
        console.log("File has been updated successfully")
    }
});