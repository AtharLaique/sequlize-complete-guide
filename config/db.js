const Sequelize=require('sequelize');
require('dotenv').config();
const{SCHEMA,USER,HOST}=process.env;
const db= new Sequelize(SCHEMA,USER,'ScPtcl@2019',{host:HOST,dialect:'mysql'});
module.exports=db;