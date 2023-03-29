const { models } = require('../db/db.sequelize');

async function getProducts(req, res){
    try{
        const data = await models.Product.findAll();
        res.status(200)
            .json({
                error: null,
                products: data
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                products: null
            });
    }
}

async function getById(req, res){
    try{
        const { id } = req.params;
        const product = await models.Product.findByPk(id);
        res.status(200)
            .json({
                error: null,
                product: product
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                product: null
            });
    }
}

async function create(req, res){
    try{
        const data = req.body;
        const newProduct = await models.Product.create(data);
        res.status(201)
            .json({
                error: null,
                product: newProduct
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                product: null
            });
    }
}

async function update(req, res){
    try{
        const data = req.body;
        const { id } = req.params;
        const product = await models.Product.findByPk(id);
        await product.update(data);
        res.status(200)
            .json({
                error: null,
                message: 'UPDATED'
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                message: 'Error service failed to update'
            });
    }
}

async function deleteById(req, res){
    try{
        const { id } = req.params;
        const product = await models.Product.findByPk(id);
        await product.destroy(product);
        res.status(200)
            .json({
                error: null,
                message: 'DELETED'
            });
    }catch (e) {
        res.status(404)
            .json({
                error: e.message,
                message: 'Error service failed to delete'
            });
    }
}

module.exports = { getProducts, getById, create, update, deleteById };