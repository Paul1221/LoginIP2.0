mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    email: {type:String, required:true , unique:true},
    username:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    active:{type:Boolean , required:true , default:false},
    temporaryToken:{type:String,required:false}
});

const User = mongoose.model('users',UserSchema,'users');

module.exports=User;