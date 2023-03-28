const express = require('express');
const productsService = require('./../services/product.service');


const router = express.Router();


router.get('/',productsService.getProducts);
router.get('/:id',productsService.getById);
router.post('/',productsService.create);
router.patch('/:id',productsService.update);
router.delete('/:id',productsService.deleteById);


module.exports = router;