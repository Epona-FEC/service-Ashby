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

const getData = function (query, callback) {
  console.log('in database/model/getData');
  dbConnection.query(query, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const selectAllItems = function (callback) {
  console.log('in database/model/selectAllItems');
  let query = `SELECT * FROM items`;
  getData(query, callback);
};

const selectOneItem = function (itemId, callback) {
  console.log('in database/model/selectOneItem');
  let query = `SELECT * FROM items WHERE id = ${itemId}`;
  getData(query, callback);
}

exports.dbConnection = dbConnection;
exports.selectAllItems = selectAllItems;
exports.selectOneItem = selectOneItem;