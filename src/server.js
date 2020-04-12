const express = require('express');
var app = express();
app.use(express.json());
const mongoose = require('mongoose');
//const path = require('path');
//const bodyParser = require('body-parser');

const User = require('./user');



mongoose.Promise=global.Promise;
var db = mongoose.connect('mongodb://localhost:27017/AuthorizationDB',{useNewUrlParser: true ,useUnifiedTopology: true },function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database');
    }
});


app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept');
    next();
});


app.get("/dbAPI/getUsers",function(req,res){
    User.find({})
    .then((users)=>res.send(users))
    .catch((error)=>console.log(error));
});

app.get("/dbAPI/getUsernameByEmail/:emailadress",function(req,res){
    User.find({email:req.params.emailadress},{username:1,_id:0})
    .then((users)=>res.send(users))
    .catch((error)=>console.log(error));
});

app.get("/dbAPI/isUsernameValid/:username",function(req,res){
    User.find({username:req.params.username},{username:1,_id:0})
    .then((users)=>res.send(users))
    .catch((error)=>console.log(error));
});

app.get("/dbAPI/getPasswordByUsername/:username",function(req,res){
    User.find({username:req.params.username},{password:1,_id:0})
    .then((users)=>res.send(users))
    .catch((error)=>console.log(error));
});

app.get("/dbAPI/getPasswordByEmail/:emailadress",function(req,res){
    User.find({email:req.params.emailadress},{password:1,_id:0})
    .then((users)=>res.send(users))
    .catch((error)=>console.log(error));
});

app.post("/dbAPI/addUser",function(req,res){
    (new User({
        'email':req.body.email,
        'username':req.body.username,
        'password':req.body.password
    }))
    .save()
    .then((user)=>res.send(user))
    .catch((error)=>console.log("Duplicate username or email"));
});


app.get('/',function(req,res){

  res.send("hello");
});

var port = process.env.port||8000;


app.listen(port,function(){
    console.log("Server started at port: "+port);
});