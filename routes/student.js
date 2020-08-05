const express=require('express');
const router=express.Router();
//Import Student controller
const {getAllStudents}=require('../controller/student');
//Import Student model
const Student=-require('../models/Student');
router.get('/students/',getAllStudents)
module.exports=router;