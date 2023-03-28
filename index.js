const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');
const cors = require('cors');

//Initializations
const app = express();
const port = process.env.PORT || 3000;

//Settings
app.set('port', port);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
// app.use(errorHandler);

//Starting the server
app.listen(port,() => {
    console.log('Server on port: ' + app.get('port'));
});
