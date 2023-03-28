const express = require('express');
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


