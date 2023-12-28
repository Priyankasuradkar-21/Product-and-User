const sequelize = require('./db/postgresConnection')
const User = require('./model/user');

try {
    sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
} catch (error) {
    console.error('Error synchronizing database:', error);
}


