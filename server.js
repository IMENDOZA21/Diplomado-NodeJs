const http = require('http');
const api = require('./api');

const puerto = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            api.getById(req, res);
            return;
        case 'POST':
            api.post(req, res);
            return;
        case 'PUT':
            api.put(req, res);
            return;
        case 'DELETE':
            api.delete(req, res);
            return;
        default:
            res.end("Metodo no implementado");
            break;
    }
});

server.listen(puerto, () => {
    console.log("El servidor esta escuchando por el puerto: "+puerto);
});

