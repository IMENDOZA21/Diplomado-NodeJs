const client = require('./db');

const getTasks = (req, res) => {
    try{
        client.query("SELECT * FROM public.tasks ORDER BY id",(err, result) => {
            if(err){
                throw err;
            }
            res.status(200)
                .json({
                    error: null,
                    tareas: result.rows
                });
        });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                tareas: null
            });
    }
}

const getById = (req, res) => {
    try{
        const { id } = req.params;
        client.query("SELECT * FROM public.tasks WHERE id = $1",[id],(err, result) => {
            console.log(result);
            if(err || !result.rows[0]){
                res.status(404)
                    .json({
                        error: err? err.message:"ERROR",
                        tarea: 'NOT FOUND'
                    });
            } else {
                res.status(200)
                    .json({
                        error: null,
                        tarea: result.rows[0]
                    });
            }
        });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                tarea: null
            });
    }
}

const create = (req, res) => {
    try{
        const data = req.body;
        client.query("INSERT INTO public.tasks(nombre, completado) VALUES ($1, $2)",[data.nombre, data.completado],(err, result) => {
            if(err){
                res.status(404)
                    .json({
                        error: err.message,
                        message: null
                    });
            }
            res.status(201)
                .json({
                    error: null,
                    message: 'CREATED'
                });
        });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                message: 'Error en el servicio'
            });
    }
}

const update = (req, res) => {
    try{
        const data = req.body;
        const { id } = req.params
        client.query("UPDATE public.tasks SET nombre=$1, completado=$2 WHERE id=$3",[data.nombre, data.completado, id],(err, result) => {
            if(err){
                res.status(404)
                    .json({
                        error: err.message,
                        message: null
                    });
            }else {
                res.status(201)
                    .json({
                        error: null,
                        message: 'UPDATED'
                    });
            }
        });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                message: 'Error en el servicio'
            });
    }
}

const deleteById = (req, res) => {
    try{
        const { id } = req.params
        client.query("DELETE FROM public.tasks WHERE id=$1",[id],(err, result) => {
            if(err){
                res.status(404)
                    .json({
                        error: err.message,
                        message: null
                    });
            }else {
                res.status(200)
                    .json({
                        error: null,
                        message: 'DELETED'
                    });
            }
        });
    }catch (e) {
        res.status(500)
            .json({
                error: e.message,
                message: 'Error en el servicio'
            });
    }
}

module.exports = { getTasks, getById, create, update, deleteById };