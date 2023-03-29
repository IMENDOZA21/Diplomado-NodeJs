const { Sequelize } = require('sequelize');
const setupModels = require('../model');

const sequelize = new Sequelize({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'myPrueba',
    dialect: "mysql",
    logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;