var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();
var secret = 'harrypotter';
app.use(express.json());
var mongoose = require('mongoose');
var nodemailer=require('nodemailer');
//const path = require('path');
//const bodyParser = require('body-parser');

const User = require('./user');

let transporter = nodemailer.createTransport({
  service:'gmail',
  auth:{
          user:'arhire.paul@gmail.com',
          pass:'Paulefrumos'
  }

});

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

app.get("/dbAPI/getUserByEmail/:emailadress",function(req,res){
    User.findOne({email:req.params.emailadress})
    .then((users)=>res.send(users))
    .catch((error)=>res.send(error));
});
app.get("/dbAPI/getUserByUsername/:username",function(req,res){
    User.findOne({username:req.params.username})
    .then((users)=>res.send(users))
    .catch((error)=>res.send(error));
});
app.get("/dbAPI/getUsers",function(req,res){
    User.find({})
    .then((users)=>res.send(users))
    .catch((error)=>res.send(error));
});

app.get("/dbAPI/isUsernameValid/:username",function(req,res){
    User.find({username:req.params.username},{username:1,_id:0})
    .then((users)=>res.send(users))
    .catch((error)=>res.send(error));
});


app.post("/dbAPI/addUser",function(req,res){
    (new User({
        'email':req.body.email,
        'username':req.body.username,
        'password':req.body.password,
        'temporaryToken':jwt.sign({email:req.body.email,usrname:req.body.username},secret,{expiresIn:'1d'})
    }))
    .save()
    .then((user)=>{
        res.send(user);
        let mailOptions = {
            from:'arhire.paul@gmail.com',
            to:user.email,
            subject:'test',
            text:'Salut ' + user.username + 'Te rog apasa pe urmatorul link pentru a confirma inregistrarea http://localhost:8000/activation/'+user.temporaryToken
        };
        
        transporter.sendMail(mailOptions,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log('gata');
            }
        });
    })
    .catch((err)=>console.log(err));
});

app.post("/dbAPI/addSocialUser",function(req,res){
    (new User({
        'email':req.body.email,
        'username':req.body.username,
        'password':req.body.password,
        'active':true
    }))
    .save()
    .then((user)=>{
        res.send(user);
        let mailOptions = {
            from:'arhire.paul@gmail.com',
            to:user.email,
            subject:'test',
            text:'Salut ' + user.username + 'parola ta este:'+user.password
        };
        
        transporter.sendMail(mailOptions,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                console.log('gata');
            }
        });
    })
    .catch((err)=>console.log(err));
});

app.get('/activation/:token',function(req,res){
    var accepted=0;
    console.log('hai ca e bine0');
    User.findOne({temporaryToken:req.params.token})
    .then((user)=>{
        var token = req.params.token;
        jwt.verify(token,secret,function(err,decoded){
            if(err){
                res.json({succes:false , message:'Link ul de activare a expirat'});
            }else if(!user){
                res.json({succes:false , message:'Link ul de activare a expirat'});
            }
            else{
                accepted=1;
                console.log('hai ca e  f bine');
                user.temporaryToken=false;
                user.active=true;
                user.save(function(err){
                    if(err) console.log(err); 
                    else{
                        console.log('hai ca e bine');
                    }
                });
                
                //res.json({succes:true , message:'Contul a fost activat'}); 
                res.redirect("http://localhost:4200/");
            }
        });
        
    })
    .catch((err)=>{
        console.log('aici:'+err);
    })
    if(accepted==1){
        
    }
    
});

app.get('/',function(req,res){

  res.send("hello");
});


var port = process.env.port||8000;


app.listen(port,function(){
    console.log("Server started at port: "+port);
});