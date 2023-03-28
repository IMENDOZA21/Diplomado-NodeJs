const { taskScheme, Task } = require('./tasks.model');
const { userScheme, User } = require('./users.model');
const { productScheme, Product } = require('./products.model');

function setupModels(sequelize){
    Task.init(taskScheme, Task.config(sequelize));
    User.init(userScheme, User.config(sequelize));
    Product.init(productScheme, Product.config(sequelize));
}

module.exports = setupModels;