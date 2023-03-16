const express = require('express');


//Initializations
const app = express();
const port = process.env.PORT || 3000;
const products = [
    {
        "id": 1,
        "name": "producto 1",
        "price": 11
    },
    {
        "id": 2,
        "name": "producto 2",
        "price": 12
    },
    {
        "id": 3,
        "name": "producto 3",
        "price": 13
    },
    {
        "id": 4,
        "name": "producto 4",
        "price": 14
    },
    {
        "id": 5,
        "name": "producto 5",
        "price": 15
    }
];

//Settings
app.set('port', port);

//Middlewares

//Global variables

//Routes
app.get('/', (req, res) => {
    res.send({
        "id": 1,
        "name": "ivan"
    })
});
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    res.send(products.filter(x => x.id === id));
});
app.get('/productsByValue/:value', (req, res) => {
    const value = parseFloat(req.params.value);
    res.send(products.filter(x => x.price === value));
});
app.get('/productsMinValue/:value', (req, res) => {
    const value = parseFloat(req.params.value);
    res.send(products.filter(x => x.price < value));
});

//Public

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});