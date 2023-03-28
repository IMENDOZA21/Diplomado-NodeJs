const productRouter = require('./products.router');
const userRouter = require('./users.router');
const taskRouter = require('./tasks.router');

function routerApi(app){
    app.use('/products', productRouter);
    app.use("/users", userRouter);
    app.use("/tasks", taskRouter);
}

module.exports = routerApi;