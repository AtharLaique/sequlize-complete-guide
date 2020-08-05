const Sequelize = require('sequelize')
const db = require('../config/db');
const Student=db.define('student', 
{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    get(){
        const rawName=this.getDataValue(name);
        return rawName.toUpperCase()
    }

  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    max:12,
    min:11
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Student;
