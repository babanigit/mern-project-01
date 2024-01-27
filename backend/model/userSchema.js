const bcrypt = require("bcryptjs");


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


// we are hashing the password
userSchema.pre('save' , async function(next){
    console.log("hi from userSchema")
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cPassword = await bcrypt.hash(this.cPassword, 12);
    }
    next();
} )

// "useras" named database is created in backend in the structure of userSchema 
const User = mongoose.model('USERA',userSchema)
module.exports = User;