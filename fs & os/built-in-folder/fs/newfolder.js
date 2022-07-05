
const fs = require (`fs`)
// fs.mkdir(`./spring`,(error,data) =>{
// if(error){
//     console.log(`modules successful`)
// }else{
//     console.log(`modules unsuccessful`)
// }
// })

// fs.mkdir(`./pop`,(error,data)=>{
//     if(error){
//         console.log(`good`)
//     }else{
//         console.log(`tor`)
//     }
// })
fs.mkdir(`./sprimmmmm`,(error,data) =>{
    if(error){
        console.log(`modules successful`)
    }else{
        console.log(`modules unsuccessful`)
    }
    })
// fs.mkdir(`./sop`,(error,data)=>{
//     if(error){
//         console.log(`pheew`)
//     }else{
//         console.log(`mumu`)
//     }
// })


// var fs = require('fs');

// const dir = './database/temp';
// if (!fs.existsSync(dir)) {
// 	fs.mkdirSync(dir, {
// 		recursive: true
// 	});
// }


// var fs = require('fs');
// var dir = './tmp';
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }

// // or if complains about existence and nesting doesn't matter:

// var shell = require('shelljs');
// shell.mkdir('-p', 'root/parent/tmp');                

  
// fs.mkdir(`./gog`,(error,data)=>{
//     if(error){
//         console.log(`tit`)
//     }else{
//         console.log(`toor`)
//     }
// })


// var folderName = `../../..modules/built-in-folder`;
// if (!fs.existsSync(folderName)){
//         fs.mkdir(folderName, (error)=>{
//             if(error){
//                 console.log(`failed to create, `,error);
//             }else{
//                 console.log(`first folder created `);
//             }
//         });
//     }else{
//         let i =1;
//         fs.mkdir(`${folderName}${i}`,(error)=>{
//             if(error){
//                 console.log(`failed to create new folder`,error)
//             }else{
//                 console.log(`new folder created`)
//             }
//         })
//     }




const fs = require("fs")
let folderName = "../../../new/news";
let i = 1;
if (!fs.existsSync(folderName)) {
    fs.mkdir(folderName, (error)=> {
        if(error){
            console.log("Failed to create first folder", error);
        } else{
            console.log("First folder successfully created");
        }
    })
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
