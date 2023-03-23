const express = require('express');
const tasks = require('./tasks')
const taskspool = require('./tasks.pool')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/tasks',tasks.getTasks);
app.get('/tasks/:id',tasks.getById);
app.post('/tasks',tasks.create);
app.put('/tasks/:id',tasks.update);
app.delete('/tasks/:id',tasks.deleteById);

//routes pool
app.get('/taskspool',taskspool.getTasks);
app.get('/taskspool/:id',taskspool.getById);
app.post('/taskspool',taskspool.create);
app.put('/taskspool/:id',taskspool.update);
app.delete('/taskspool/:id',taskspool.deleteById);

app.listen(port,() => {
   console.log('Escuchando por el puerto: ' + port);
});


