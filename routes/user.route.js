const express=require('express')
const router=express.Router();
const user=require('../controllers/user.controller')

router.post("/findUser",user.FindUser)
router.post("/signUp",user.SignUp)
router.post("/index",user.index)

module.exports=router