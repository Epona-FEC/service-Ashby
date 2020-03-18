const mysql = require('mysql');

// ***********  db connection  ***********
const connectionOptions = {
  user: 'root',
  password: ''
}

const dbConnection = mysql.createConnection(connectionOptions);
dbConnection.connect((err) => {
  if (err) {
    console.error('db connection error:', err);
    return;
  }
  console.log('connected to mysql');
});

dbConnection.query('USE etsy_products');

// need a function that fetches all items
const selectAllItems = function (callback) {
  console.log('in database/model/selectAllItems');
  let query = `SELECT * FROM items`;
  dbConnection.query(query, (error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results, fields);
    }
  });
}

exports.dbConnection = dbConnection;
exports.selectAllItems = selectAllItems;