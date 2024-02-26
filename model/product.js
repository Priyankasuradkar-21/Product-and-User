const sequelize = require('../db/postgresConnection');
const { DataTypes } = require('sequelize');
const User = require('./user');

const Product = sequelize.define('Product', {
    userId: {   
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    inventory: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Product.belongsTo(User, {
    foreignKey: 'userId',
    allowNull: false
});

module.exports = Product;
