var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser=require('body-parser')
var app = express();

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.urlencoded({ extended: true }));


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


const otpRoute=require('./routes/otp.route')
app.use("/otp",otpRoute)

const userRoute=require('./routes/user.route')
app.use("/user",userRoute)

const stadiumRoute=require('./routes/stadium.route')
app.use("/stadium",stadiumRoute)


module.exports = app;
