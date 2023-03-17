const express = require('express');
const faker = require("faker");

//Initializations
const router = express.Router();
const products = [];

//Routes
router.get('/', (req, res) => {
    const { size } = req.query;
    const limit = size || 10;
    for (let i=1; i<=limit; i++){
        products.push({
            "id": i,
            "name": faker.commerce.productName(),
            "price": parseInt(faker.commerce.price()),
            "image": faker.image.imageUrl()
        })
    }
    res.send(products);
});
router.get('/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    res.send(products.filter(x => x.id === id));
});
router.get('/byValue/:value', (req, res) => {
    const value = parseFloat(req.params.value);
    res.send(products.filter(x => x.price === value));
});
router.get('/minValue/:value', (req, res) => {
    const value = parseFloat(req.params.value);
    res.send(products.filter(x => x.price < value));
});
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201)
        .json({
        message: "Created",
        data: body
    });
});
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({
        message: "Updated",
        data: body,
        id
    });
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        message: "Deleted",
        id
    });
});

module.exports = router;
