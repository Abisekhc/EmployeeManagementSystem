const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'employee_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;
