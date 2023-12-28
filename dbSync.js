const sequelize = require('./db/postgresConnection')
const User = require('./model/user');
const Post = require('./model/post');

try {
    sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
} catch (error) {
    console.error('Error synchronizing database:', error);
}


