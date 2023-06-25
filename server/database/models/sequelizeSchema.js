const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config");

// Define doctors model
const Doctors = sequelize.define('doctors', {

  doctorsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'doctors',
  timestamps: false
});

// Define clients model
const Clients = sequelize.define('clients', {
  
  clientsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  tableName: 'clients',
  timestamps: false
});

// Define associations
Clients.belongsTo(Doctors, {
  foreignKey: 'doctors_doctorsId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Doctors.hasMany(Clients, {
  foreignKey: 'doctors_doctorsId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
module.exports = sequelize;
module.exports=Doctors

