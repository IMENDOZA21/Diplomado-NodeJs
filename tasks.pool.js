const pool = require('./db.pool');

const getTasks = (req, res) => {
    const query = "SELECT * FROM public.tasks ORDER BY id";
    pool.connect().then((client) => {
        return client.query(query)
            .then((response) => {
                res.status(200)
                    .json({
                        error: null,
                        tasks: response.rows
                    });
            })
            .catch((err) => {
                res.status(500)
                    .json({
                        error: err.message,
                        tasks: null
                    });
            });
    });
}

const getById = (req, res) => {
    const query = "SELECT * FROM public.tasks WHERE id = $1";
    const { id } = req.params;
    pool.connect().then((client) => {
        return client.query(query,[id])
            .then((response) => {
                res.status(200)
                    .json({
                        error: null,
                        task: response.rows[0]
                    });
            })
            .catch((err) => {
                res.status(500)
                    .json({
                        error: err.message,
                        task: null
                    });
            });
    });
}

const create = (req, res) => {
    const query = "INSERT INTO public.tasks(nombre, completado) VALUES ($1, $2)";
    const data = req.body;
    pool.connect().then((client) => {
        return client.query(query,[data.nombre, data.completado])
            .then((response) => {
                res.status(201)
                    .json({
                        error: null,
                        message: 'CREATED'
                    });
            })
            .catch((err) => {
                res.status(500)
                    .json({
                        error: err.message,
                        message: null
                    });
            });
    });
}

const update = (req, res) => {
    const query = "UPDATE public.tasks SET nombre=$1, completado=$2 WHERE id=$3";
    const data = req.body;
    const { id } = req.params
    pool.connect().then((client) => {
        return client.query(query,[data.nombre, data.completado, id])
            .then((response) => {
                console.log(response);
                res.status(200)
                    .json({
                        error: null,
                        message: 'UPDATED'
                    });
            })
            .catch((err) => {
                res.status(500)
                    .json({
                        error: err.message,
                        message: null
                    });
            });
    });
}

const deleteById = (req, res) => {
    const query = "DELETE FROM public.tasks WHERE id=$1";
    const { id } = req.params
    pool.connect().then((client) => {
        return client.query(query,[id])
            .then((response) => {
                res.status(200)
                    .json({
                        error: null,
                        message: 'DELETED'
                    });
            })
            .catch((err) => {
                res.status(500)
                    .json({
                        error: err.message,
                        message: null
                    });
            });
    });
}

module.exports = { getTasks, getById, create, update, deleteById };