const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',
  port: 3307,
  password: 'root_password',
  database: 'chica_aura',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;