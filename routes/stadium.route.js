const express=require('express')
const router=express.Router();
const stadium=require('../controllers/stadium.controller')

router.post("/GetAddress",stadium.GetAddress)
router.post("/FindInCity",stadium.FindInCity)
router.post("/index",stadium.index)
module.exports=router

