// const { CURSOR_FLAGS } = require("mongoose/node_modules/mongodb")
const carModel = require("./model")


//create new car
const createCar = async (req, res) => {
    try {
        const newCar = await carModel.create(req.body)
        // const newCar = await carModel.create({
        //     carName: req.body.carName,
        //     carYear: req.body.carYear
        // })
        
        res.status(201).json({
            status: "Success",
            data: newCar
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

const carModel = require("")
// const carModel = require("./model")
// const createCar=async(req,res)=>{
//     try {
//       const newCar = await carModel.create(req.body)
//       res.status(201).json({
//           status:"successful",
//           data:newCar
//       })  
//     } catch (error) {
//     res.status(404).json({
//         status:"failure",
//         message:err.message
//     })    
//     }
// }
// module.exports={
//     createCar
// }

// const carModel = require ("./model")
// const createCar = async(req,res)=>{
//     try {
//         const newCar = await carModel.create(req.body)
//         res.status(201).json({
//             status:"success",
//             data:newCar
//         })
//     } catch (error) {
//         res.status(404).json({
//             status:"failure",
//             message:error.message
//         })
//     }
// }
// module.exports={
//     createCar
// }




// const carModel = require("./model")
// const createCar = async(req,res)=>{
//     try {
//         const newCar = await carModel.create(req.body)
//         res.status(201).json({
//             status:"good",
//             data:newCar
//         })
//     } catch (error) {
//         res.status(404).json({
//             status:"failure",
//             message:error.message
//         })
//     }
// }
// module.exports={
//     createCar
// }
















//get all data
const getAllCars = async (req, res) => {
    try {
        const allCars = await carModel.find()

        res.status(200).json({
            status: "Success",
            data: allCars
        })

    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}


// const allCars =async (req,res)=>{
//     try {
//         const getAll = await carModel.find()
//         res.status(200).json({
//             status:"good",
//             data:getAll
//         })
//     } catch (error) {
//         res.status(404).json({
//             status:"fail",
//             message:error.message
//         })
//     }
// }
// module.exports={
//     allCars
// }
// const totalCar = async(req,res)=>{
//     try {
//         const SumCar = await carModel.find()
//         res.status(200).json({
//             status:"good",
//             data:SumCar
//         })
//     } catch ( error) {
//         res.status(404).json({
//             status:"fail",
//             message:error.message
//         })
        
//     }
// }
// module.exports={
//     totalCar
// }
//update
const updateCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            status: "Success",
            data: car
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

// const updatCar =async (req,res)=>{
//     try {
//         const car  =await carModel.findByIdAndUpdate(req.params)
//         res.status(200).json({
//             status:"good",
//             data:car
//         })
//     } catch (error) {
//         res.status(404).json({
//             status:"fail",
//             message:err.message
//         })
//     }
// }
// module.exports={
//     updatCar
// }
//findOnebyid
const findOneCar = async (req, res) => {
    try {
        
        //get the right car with id
        const car = await carModel.findById(req.params.id)

        //check if the car with that id is in our database
        //if(!car) means if there's car with that id send, a response
        if(!car) {
            res.status(404).json({
                status: "Failure",
                message: "Car with with that id is not found"
            })
        } 

        res.status(200).json({
            status: "Success",
            data: car
        })

    
        
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

//delete
const deleteCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndRemove(req.params.id)
        res.status(204).json({
            status: "Success",
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}
module.exports = {
    createCar,
    getAllCars,
    updateCar,
    findOneCar,
    deleteCar
}