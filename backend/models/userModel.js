const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username : {type:String , required: true, duplicate: false},
     password : {type:String , required: true},
     isOwner : {type:Boolean , required: true},
    

})

const userModel = mongoose.model('users' , userSchema)

module.exports = userModel