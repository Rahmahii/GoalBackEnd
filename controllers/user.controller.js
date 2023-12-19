const { status } = require('express/lib/response');
const models = require('../models')
const tool = require('./tool')
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
function index(req, res){
    models.User.findAll().then(async result => {
        console.log(result)
        if (result) {
            res.json({
                message: "user already exists!",
                user: result,
            });
        } else {
            res.json({
                message: "New user!",
            });
        }
    })
}

function FindUser(req, res) {
    //phone = tool.PhoneFormat(req.body.phone)
    phone = req.body.phone
    console.log(phone)
    models.User.findOne({ where: { phone } }).then(async result => {
        console.log(result)
        if (result) {
            var token = jwt.sign(tool.sign(result), process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })
            res.json({
                message: "user already exists!",
                user: result,
                token: token,
                status:22
            });
        } else {
            res.json({
                message: "New user!",
                status:44
            });
        }
    })
}

function SignUp(req, res) {
     //phone = tool.PhoneFormat(req.body.phone)
    var user = {
        name: req.body.name,
        phone: req.body.phone,
        username: req.body.username,
        password:Math.floor(100000 + Math.random() * 999999),
        gender:req.body.gender,
        birthDate: req.body.birthDate,
    }
    models.User.create(user).then(async result => {
        console.log(result)
        if (result) {
            console.log("hghghgll")
            var token = jwt.sign(tool.sign(user), process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN,
            })
           
            res.json({
                message: "user create successfully ",
                user: result,
                token: token,
                status:true
            })
        }else{
            res.json({
                message: "enter user information correctly!",
                user: result,
                status:false
            })
        }
    }).catch(error => {
        res.json({
            message: "something went wrong ",
            error: error
        })
    })

}


module.exports = {
    FindUser,
    SignUp,
    index
}