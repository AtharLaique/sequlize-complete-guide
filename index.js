const express=require('express');
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const studentRoute=require('./routes/student');
require('dotenv').config();
//Envoirement variables
const port =process.env.PORT || 3001;
const env=process.env.NODE_ENV

//App Middleware
app.use(morgan('dev'))
if(env==='development'){
        app.use(cors({origin:'http://localhost:3000'}))
    }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
//Routes Middelwares
app.use('/api',studentRoute)

app.listen(port,()=>{
 console.log(`App is running on :${port}`)
})