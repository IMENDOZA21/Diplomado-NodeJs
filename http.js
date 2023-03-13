const http = require('http');

function servidor(req, res){
    console.log("Nueva peticion");
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(201,{
            'content-type': 'text/html; charset-utf-8'
        });
        res.write(`<!doctype html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
    </head>
        <body>
        <p>
            PRUEBA HTML
        </p>
        </body>
    </html>`);
    }else{
        res.writeHead(404,{
            'content-type': 'text/html; charset-utf-8'
        });
    }
    res.end();
}
http.createServer(servidor).listen(3000);

console.log("Escuchando por el puerto 3000");