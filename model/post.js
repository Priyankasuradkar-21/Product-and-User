const sequelize = require('../db/postgresConnection');
const {DataTypes} = require('sequelize');
const User = require('./user');

const Post = sequelize.define('Post', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
    },
    title : {
        type : DataTypes.STRING,
        allowNull : true,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : true,
    },
    post : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

Post.belongsTo(User, {
    foreignKey : 'id',
    allowNull : false
})

module.exports = Post;