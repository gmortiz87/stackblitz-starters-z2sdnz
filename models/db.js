const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'hostinger-database-host',
  user: 'database-user',
  password: 'database-password',
  database: 'database-name'
});

module.exports = pool;
