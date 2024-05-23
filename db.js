// const mysql = require('mysql');
// const mysql = require('mysql2/promise');
const mysql = require('mysql2/promise');



const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

});

// pool.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database');
// });

module.exports = pool;
