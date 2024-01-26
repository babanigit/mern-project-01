
// you exported mongoose here, or backend 
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    work:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cPassword:{
        type:String,
        require:true
    },
})

// "useras" named database is created in backend in the structure of userSchema 
const User = mongoose.model('USERA',userSchema)
module.exports = User;