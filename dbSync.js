const sequelize = require('./db/postgresConnection')
const User = require('./model/user');
const Product = require('./model/product');

const syncDatabase = async() => {
    try {
        console.log();
        await sequelize.sync({ force: true });
        console.log();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}

module.exports = syncDatabase;




 