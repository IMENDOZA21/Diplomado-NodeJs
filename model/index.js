const { taskScheme, Task } = require('./tasks.model');
const { userScheme, User } = require('./users.model');

function setupModels(sequelize){
    Task.init(taskScheme, Task.config(sequelize));
    User.init(userScheme, User.config(sequelize));
}

module.exports = setupModels;