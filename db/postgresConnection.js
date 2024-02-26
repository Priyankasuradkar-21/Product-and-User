const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'Product-Manage'
})

sequelize.authenticate()
    .then(async() => {
        console.log('Connection established')
        
    }).catch((err) => {
        console.error('Connection error: ' + err);
    })

module.exports = sequelize