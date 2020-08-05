const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const studentRoute=require('./routes/student');
const db=require('./config/db');
require('dotenv').config();
//Envoirement variables
const{ PORT , NODE_ENV}=process.env;
//App Middleware
db.sync((req,res)=>{
    
})
app.use(morgan('dev'))
if(NODE_ENV==='development'){
        app.use(cors({origin:'http://localhost:3000'}))
    }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
//Routes Middelwares
app.use('/api',studentRoute)

app.listen(PORT ||3001,()=>{
 console.log(`App is running on :${PORT}`)
})