const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin',
    database: 'myPrueba'
});

client.connect();

client.query("SELECT * FROM public.tarea",(err, result) => {
    if(err){
        console.log(err);
    }else {
        console.log(result.rows);
    }
})

