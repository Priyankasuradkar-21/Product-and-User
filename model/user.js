
const { DataTypes } = require('sequelize');
const sequelize = require('../db/postgresConnection');   

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  passwords : {
    type : DataTypes.STRING,
    allowNull: false,
  }
  
});

module.exports = User;
