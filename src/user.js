mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    email: {type:String , unique:true},
    username:{type:String,unique:true},
    password:{type:String}
});

const User = mongoose.model('users',UserSchema,'users');

module.exports=User;