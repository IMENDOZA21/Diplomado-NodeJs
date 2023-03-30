const { models } = require('../db/db.sequelize');

async function getUsers(req, res){
    try{
        const data = await models.User.findAll();
        res.status(200)
            .json({
                error: null,
                users: data
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                users: null
            });
    }
}

async function getById(req, res){
    try{
        const { id } = req.params;
        const user = await models.User.findByPk(id);
        res.status(200)
            .json({
                error: null,
                user: user
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                user: null
            });
    }
}

async function create(req, res){
    try{
        const data = req.body;
        const newUser = await models.User.create(data);
        res.status(201)
            .json({
                error: null,
                user: newUser
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                user: null
            });
    }
}

async function update(req, res){
    try{
        const data = req.body;
        const { id } = req.params;
        const user = await models.User.findByPk(id);
        await user.update(data);
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
        const user = await models.User.findByPk(id);
        await user.destroy(user);
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


module.exports = { getUsers, getById, create, update, deleteById };