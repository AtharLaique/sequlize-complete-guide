const express=require('express');
const router=express.Router();
//Import Student controller
const {getAllStudents}=require('../controller/student');
router.get('/students/',getAllStudents)
module.exports=router;