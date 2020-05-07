mongoose = require('mongoose');

const UserSchema= new mongoose.Schema({
    email: {type:String, required:true , unique:true},
    username:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    name:{type:String, required:false},
    surname:{type:String, required:false},
    age:{type:Number, required:false},
    sex:{type:String, required:false},
    environment:{type:String,required:false},
    homeAdress:{type:String,required:false},
    job:{type:String,required:false},
    activity:{type:String,required:false},
    familyMembers:{type:[String],required:false},
    proximityGroup:{type:[String],required:false},
    medicalHistory:{type:[String],required:false},
    active:{type:Boolean , required:true , default:false},
    temporaryToken:{type:String,required:false},
    specialization:{type:String,required:false},
    cabinetAdress:{type:String,required:false},
    workNumber:{type:String,required:false}
});

const User = mongoose.model('users',UserSchema,'users');

module.exports=User;