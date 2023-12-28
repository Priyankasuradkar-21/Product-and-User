// user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/postgresConnection');   

const User = sequelize.define('User', {
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    allowNull : false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  isUserVerified : {
    type : DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = User;
