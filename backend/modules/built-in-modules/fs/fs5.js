
const fs = require("fs")


//this one represent the path to the new children folder
let folderName = "../../../Folders/folder";
let i = 1;

//first check if the path already exist/
//if it doesn't exist create it
if (!fs.existsSync(folderName)) {
    fs.mkdir(folderName, (error)=> {
        if(error){
            console.log("Failed to create first folder", error);
        } else{
            console.log("First folder successfully created");
        }
    })
    // break;

    //else, if it exist create a new  children folder
} else 
if(!fs.existsSync(`${folderName}${i}`)){
   
    fs.mkdir(`${folderName}${i}`, (error) => {
        if(error){
            console.log("Failed to create NEW folder1", error);
        } else {
            console.log("New folder1 created");
        }
    });
    i += 1;
} else
 if(!fs.existsSync(`${folderName}2`)){
    // i += 1;
    fs.mkdir(`${folderName}2`, (error) => {
        if(error){
            console.log("Failed to create NEW folder2", error);
        } else {
            console.log("New folder2 created");
        }
    });
} else {

    console.log("No more folders can be created")
}


// if(!fs.existsSync(`${folderName}3`)){
//     // i += 1;
//     fs.mkdir(`${folderName}3`, (error) => {
//         if(error){
//             console.log("Failed to create NEW folder3", error);
//         } else {
//             console.log("New folder3 created");
//         }
//     });
// } else
//  if(!fs.existsSync(`${folderName}4`)){
//     // i += 1;
//     fs.mkdir(`${folderName}4`, (error) => {
//         if(error){
//             console.log("Failed to create NEW folder4", error);
//         } else {
//             console.log("New folder4 created");
//         }
//     });
// } else
//  if(!fs.existsSync(`${folderName}5`)){
//     // i += 1;
//     fs.mkdir(`${folderName}5`, (error) => {
//         if(error){
//             console.log("Failed to create NEW folder5", error);
//         } else {
//             console.log("New folder5 created");
//         }
//     });
// } else {