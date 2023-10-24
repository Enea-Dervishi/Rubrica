//Creazione connessione pool con un postgreSQL db
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'contactdetails',
    password: '12345',
    port: 8080,
});

module.exports = pool;