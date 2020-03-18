const mysql = require('mysql');
const data = require('./generateData');

const fillLocationsTable = function (dbConnection, callback) {
  let query = "INSERT INTO locations (country, state, city) VALUES ?";
  let locations = data.generateAllLocations();
  dbConnection.query(
    query,
    [locations],
    function (err, result) {
      if (err) {
        callback(err);
      }
      callback(null, result);
    }
  );
};

const fillShippingTable = function (dbConnection, callback) {
  let query = 'INSERT INTO shipping (type, free, timeframe) VALUES ?';
  let shippinginfo = data.generateAllShipping();
  dbConnection.query(
    query,
    [shippinginfo],
    function (err, result) {
      if (err) {
        callback(err);
      }
      callback(null, result);
    }
  );
};

const fillItemsTable = function (dbConnection, callback) {
  let query =
    `INSERT INTO items (
      title,
      price,
      shipping_id,
      materials,
      description,
      location_id,
      policies,
      return_synopsis,
      dimensions,
      max_order_qty,
      returns_condition,
      inventory_count,
      in_other_carts,
      gift_wrap,
      faqs,
      bestseller,
      personalizable,
      handmade,
      vintage
    ) VALUES ?`;
  let itemsInfo = data.generateAllItems();
  dbConnection.query(
    query,
    [itemsInfo],
    function (err, result) {
      if (err) {
        callback(err);
      }
      callback(null, result);
    }
  );
};

const fillOptionsTable = function (dbConnection, callback) {
  let query = 'INSERT INTO options (item_id, title, list) VALUES ?';
  let options = data.generateAllOptions();
  dbConnection.query(
    query,
    [options],
    function (err, result) {
      if (err) {
        callback(err);
      }
      callback(null, result);
    }
  );
};

const fillMarkdownsTable = function (dbConnection, callback) {
  let query = 'INSERT INTO markdowns (item_id, discount, end_date) VALUES ?';
  let markdowns = data.generateAllMarkdowns();
  dbConnection.query(
    query,
    [markdowns],
    function (err, result) {
      if (err) {
        callback(err);
      }
      callback(null, result);
    }
  );
}


exports.fillLocationsTable = fillLocationsTable;
exports.fillShippingTable = fillShippingTable;
exports.fillItemsTable = fillItemsTable;
exports.fillOptionsTable = fillOptionsTable;
exports.fillMarkdownsTable = fillMarkdownsTable;