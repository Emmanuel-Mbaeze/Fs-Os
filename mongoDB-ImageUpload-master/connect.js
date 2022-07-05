const mongoose = require("mongoose")
const url = "mongodb://localhost/carSchemaDB"

mongoose.connect(url).then(() => {
    console.log("DB connect");
}).catch((err) => {
    console.log(err.message);
})