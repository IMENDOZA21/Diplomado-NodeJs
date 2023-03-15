const url = require('url');

let contactos = [
    {
        id : 1,
        nombre : "ivan",
        correo : "imendoza@unab.edu.co",
        telefono : "3203370063"
    },
    {
        id : 2,
        nombre : "rene",
        correo : "rene@unab.edu.co",
        telefono : "3203370063"
    },
    {
        id : 3,
        nombre : "leidy",
        correo : "leidy@unab.edu.co",
        telefono : "3203370063"
    }
];

exports.get = (req, res) => {
    res.statusCode = 200;
    let body = JSON.stringify(contactos);
    res.setHeader('Content-Length',Buffer.byteLength(body));
    res.setHeader('Content-Type','application/json');
    res.end(`${body}`);
}
exports.post = (req, res) => {
    let contacto = '';
    req.on('data', (data) => {
        contacto += data
    });
    req.on('end', () => {
        try {
            let nuevoContacto = JSON.parse(contacto);
            let index = contactos.findIndex(c => c.id === nuevoContacto.id);
            if(index === -1){
                contactos.push(nuevoContacto);
                res.statusCode = 201;
                res.end("Contacto creado");
            }else {
                res.statusCode = 400;
                res.end("El id ya existe");
            }
        }catch (err){
            console.error(err);
            res.statusCode = 400;
            res.write("Peticion errada: contenido no valido");
            res.end();
        }
    });
}
exports.put = (req, res) => {
    let contacto = '';
    let encontrado = false;
    req.on('data',(data) => {
       contacto += data
        let nuevocontacto = JSON.parse(contacto);
        //let c;
        let index = contactos.findIndex(c => c.id === nuevocontacto.id);

        if(isNaN(index)){
            res.statusCode = 400;
            res.end("Ha ocurrido un problema");
        }else if(index === -1){
            res.statusCode = 404;
            res.end("Registro no encontrado");
        }else {
            contactos[index].nombre = nuevocontacto.nombre;
            contactos[index].correo = nuevocontacto.correo;
            contactos[index].telefono = nuevocontacto.telefono;
            encontrado = true;
        }
        /* Otra forma de hacerlo
        for (c of contactos){
            if(c.id === nuevocontacto.id){
                c.nombre = nuevocontacto.nombre;
                c.correo = nuevocontacto.correo;
                c.telefono = nuevocontacto.telefono;
                encontrado = true;
            }
        }
         */
    });
    req.on('end', () => {
        if(encontrado){
            res.statusCode = 200;
            res.end("Registro actualizado correctamente");
        }else {
            res.statusCode = 404;
            res.end("Registro no encontrado");
        }
    })
}
exports.delete = (req, res) => {
    const path = url.parse(req.url).pathname;
    const id = parseInt(path.slice(1),10);
    let index = contactos.findIndex(c => c.id === id);
    if(isNaN(id)){
        res.statusCode = 400;
        res.end("Ha ocurrido un problema");
    }else if(index === -1){
        res.statusCode = 404;
        res.end("Id no encontrado");
    }else {
        contactos.splice(index, 1);
        res.statusCode = 200;
        res.end("Registro borrado");
    }
}
exports.getById = (req, res) => {
    const path = url.parse(req.url).pathname;
    const id = parseInt(path.slice(1),10);
    let index = contactos.findIndex(c => c.id === id);
    if(isNaN(id)){
        res.statusCode = 200;
        exports.get(req,res);
    }else if(index === -1){
        res.statusCode = 404;
        res.end("Id no encontrado");
    }else {
        res.statusCode = 200;
        let body = JSON.stringify(contactos[index]);
        res.setHeader('Content-Length',Buffer.byteLength(body));
        res.setHeader('Content-Type','application/json');
        res.end(`${body}`);
    }
}
