const { taskScheme, Task } = require('./tasks.model');

function setupModels(sequelize){
    Task.init(taskScheme, Task.config(sequelize));
}

module.exports = setupModels;