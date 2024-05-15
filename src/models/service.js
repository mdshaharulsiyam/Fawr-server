const { model, Schema } = require("mongoose");

const ServiceSchema = new Schema({
    
    'category':{
        type:String ,
        required: true
    },
    "heading":{
        type:String ,
        required: true
    },
    "img":{
        type:String ,
        required: true
    },
    "details":{
        type:String,
        required : false
    },
})


const service= model("service",ServiceSchema)

module.exports = service