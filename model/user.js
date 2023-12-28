// user.js

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');   

const User = sequelize.define('User', {
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
});

module.exports = User;
