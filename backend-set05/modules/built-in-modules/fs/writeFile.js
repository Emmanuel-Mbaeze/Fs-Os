const fs = require('fs');

// write to a file
// writeFile() method overwrites a file
fs.writeFile("../students.txt", "5. Sera", (error)=>{
    if(error){
        console.log("can not write the file" + error)
    }else{
        console.log("File has been updated successfully")
    }
});