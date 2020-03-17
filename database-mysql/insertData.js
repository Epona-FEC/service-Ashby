const mysql = require('mysql');
const data = require('./generateData');

const connectionOptions = {
  user: 'root',
  password: ''
}

var dbConnection = mysql.createConnection(connectionOptions);

// db connection - probably won't need this later, but here for testing
dbConnection.connect((err) => {
  if (err) {
    console.error('db connection error:', err);
    return;
  }
  console.log('connected to mysql');
});
dbConnection.query('USE etsy_products');

// // Plan - do data gen for each table, loop through returned array, and insert each line

const fillLocationsTable = function () {    /// !!! ADD CALLBACK!
  let query = "INSERT INTO locations (country, state, city) VALUES ?";
  let locations = data.generateAllLocations();
  dbConnection.query(
    query,
    [locations],
    function (err, result) {
      console.log(err);
      console.log(result);
    }
  );
};

const fillShippingTable = function () {
  let query = 'INSERT INTO shipping (type, free, timeframe) VALUES ?';
  let shippinginfo = data.generateAllShipping();
  dbConnection.query(
    query,
    [shippinginfo],
    function (err, result) {
      console.log(err);
      console.log(result);
    }
  );
};

fillShippingTable();

dbConnection.end();

// INSERT INTO locations (country, state, city) VALUES ?
