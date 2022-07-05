const express = require( 'express' )
const { createUser } = require( './controller' )
const imageUploader = require( './multer')

const router = express.Router()
router.post( '/fuelStation', createUser )
// METHOD TWO
// ROUTE WITHOUT ID
// router
//     .route( '/create' )
//     // .get( getAll )
//     .post( imageUploader, createUser)

// ROUTE WITH ID
// router
//     .route( '/fuelStation/:id' )
//     .get( getOne )
//     .patch( imageUploader, updateOne )
//     .delete( deleteOne )

module.exports = router
