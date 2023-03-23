const { Sequelize } = require('sequelize');
const setupModels = require('./model');

const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'myPrueba',
    dialect: "postgres",
    logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;