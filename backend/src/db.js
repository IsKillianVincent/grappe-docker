const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'mysql_db',
  user: 'user',
  password: 'password',
  database: 'version_tracker',
});

module.exports = db;