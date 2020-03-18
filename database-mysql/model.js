const mysql = require('mysql');

// ***********  db connection  ***********
const connectionOptions = {
  user: 'root',
  password: ''
}

var dbConnection = mysql.createConnection(connectionOptions);
dbConnection.connect((err) => {
  if (err) {
    console.error('db connection error:', err);
    return;
  }
  console.log('connected to mysql');
});


exports.dbConnection = dbConnection;