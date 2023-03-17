const express = require('express');
const routerApi = require('./routers');

//Initializations
const app = express();
const port = process.env.PORT || 3000;


//Settings
app.set('port', port);

//Middlewares
app.use(express.json());

//Global variables

//Routes
app.get('/', (req, res) => {
    res.send({
        "id": 1,
        "name": "ivan"
    })
});
routerApi(app);

//Public

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});