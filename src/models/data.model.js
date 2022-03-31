const mongoose = require("mongoose")


const dataSchema = new mongoose.Schema({

    "imageurl" :{type:String, required:true},
    "Name" :{type:String, required:true}
    
})


module.exports = mongoose.model("data",dataSchema)
