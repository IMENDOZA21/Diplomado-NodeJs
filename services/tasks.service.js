const { models } = require('../db.sequelize');
//const pool = require("./db.pool");

/*
async function getTasks2(req, res){
    const query = "SELECT * FROM public.tasks ORDER BY id";
    try{
        const [data] = await sequelize.query(query);
        res.status(200)
            .json({
                error: null,
                tasks: data
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                tasks: null
            });
    }
}
 */

async function getTasks(req, res){
    try{
        const data = await models.Task.findAll();
        res.status(200)
            .json({
                error: null,
                tasks: data
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                tasks: null
            });
    }
}

async function getById(req, res){
    try{
        const { id } = req.params;
        const task = await models.Task.findByPk(id);
        res.status(200)
            .json({
                error: null,
                task: task
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                task: null
            });
    }
}

async function create(req, res){
    try{
        const data = req.body;
        const newTask = await models.Task.create(data);
        res.status(201)
            .json({
                error: null,
                task: newTask
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                task: null
            });
    }
}

async function update(req, res){
    try{
        const data = req.body;
        const { id } = req.params;
        const task = await models.Task.findByPk(id);
        await task.update(data);
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
        const task = await models.Task.findByPk(id);
        await task.destroy(task);
        res.status(200)
            .json({
                error: null,
                message: 'DELETED'
            });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                message: 'Error service failed to delete'
            });
    }
}


module.exports = { getTasks, getById, create, update, deleteById };