const express = require('express');
const tasks = require('./tasks');
const taskspool = require('./tasks.pool');
const taskssequelize = require('./tasks.sequelize');
const userssequelize = require('./users.sequelize');
//Initializations
const app = express();
const port = process.env.PORT || 3000;

//Settings
app.set('port', port);

//Middlewares
app.use(express.json());

//Routes
app.get('/tasks',tasks.getTasks);
app.get('/tasks/:id',tasks.getById);
app.post('/tasks',tasks.create);
app.put('/tasks/:id',tasks.update);
app.delete('/tasks/:id',tasks.deleteById);

//Routes pool
app.get('/tasksPool',taskspool.getTasks);
app.get('/tasksPool/:id',taskspool.getById);
app.post('/tasksPool',taskspool.create);
app.put('/tasksPool/:id',taskspool.update);
app.delete('/tasksPool/:id',taskspool.deleteById);

//Routes sequelize
//------------------tasks
app.get('/tasksSequelize',taskssequelize.getTasks);
app.get('/tasksSequelize/:id',taskssequelize.getById);
app.post('/tasksSequelize',taskssequelize.create);
app.put('/tasksSequelize/:id',taskssequelize.update);
app.delete('/tasksSequelize/:id',taskssequelize.deleteById);
//-------------------users
app.get('/usersSequelize',userssequelize.getUsers);
app.get('/usersSequelize/:id',userssequelize.getById);
app.post('/usersSequelize',userssequelize.create);
app.put('/usersSequelize/:id',userssequelize.update);
app.delete('/usersSequelize/:id',userssequelize.deleteById);

//Public

//Starting the server
app.listen(port,() => {
   console.log('Server on port: ' + app.get('port'));
});


