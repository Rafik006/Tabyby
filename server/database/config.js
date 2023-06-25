const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('The_doctor', 'root', 'firemanfireman@@', {
  host: 'localhost',
  dialect: 'mysql',
});


sequelize.authenticate().then(()=>{
    console.log("connection has been established successfully ")
    
}).catch((err)=>console.error("unable to connect to the database :",err))

module.exports = sequelize;
