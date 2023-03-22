const express = require('express');
const tasks = require('./tasks')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/tasks',tasks.getTasks);
app.get('/tasks/:id',tasks.getById);
app.post('/tasks',tasks.create);
app.put('/tasks/:id',tasks.update);
app.delete('/tasks/:id',tasks.deleteById);
app.listen(port,() => {
   console.log('Escuchando por el puerto: ' + port);
});


