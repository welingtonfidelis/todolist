const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todos-db', 'root', 'root', {
    dialect: 'sqlite',
    host: 'database/db.sqlite'
});

sequelize.sync(
    // { force: true }
).then(() => console.log('db criado'));

module.exports = sequelize;