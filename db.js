const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin',
    database: 'myPrueba'
});

client.connect();

module.exports = client;