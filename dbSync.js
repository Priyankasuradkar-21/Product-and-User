const sequelize = require('./db/postgresConnection')
const User = require('./model/user');
const Post = require('./model/post');

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



