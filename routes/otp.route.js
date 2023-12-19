const express=require('express')
const router=express.Router();
const OTP=require('../controllers/otp.controller')

router.post("/sendOTP",OTP.sendOTP)
router.post("/verfiyOTP",OTP.verfiyOTP)

module.exports=router