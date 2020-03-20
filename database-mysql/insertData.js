const data = require('./generateData');

const fillLocationsTable = (dbConnection, callback) => {
  const query = 'INSERT INTO locations (country, state, city) VALUES ?';
  const locations = data.generateAllLocations();
  dbConnection.query(
    query,
    [locations],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    },
  );
};

const fillShippingTable = (dbConnection, callback) => {
  const query = 'INSERT INTO shipping (type, free, timeframe) VALUES ?';
  const shippinginfo = data.generateAllShipping();
  dbConnection.query(
    query,
    [shippinginfo],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    },
  );
};

const fillItemsTable = (dbConnection, callback) => {
  const query = `
    INSERT INTO items (
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
  const itemsInfo = data.generateAllItems();
  dbConnection.query(
    query,
    [itemsInfo],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    },
  );
};

const fillOptionsTable = (dbConnection, callback) => {
  const query = 'INSERT INTO options (item_id, title, list) VALUES ?';
  const options = data.generateAllOptions();
  dbConnection.query(
    query,
    [options],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    },
  );
};

const fillMarkdownsTable = (dbConnection, callback) => {
  const query = 'INSERT INTO markdowns (item_id, discount, end_date) VALUES ?';
  const markdowns = data.generateAllMarkdowns();
  dbConnection.query(
    query,
    [markdowns],
    (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null, result);
    },
  );
};


exports.fillLocationsTable = fillLocationsTable;
exports.fillShippingTable = fillShippingTable;
exports.fillItemsTable = fillItemsTable;
exports.fillOptionsTable = fillOptionsTable;
exports.fillMarkdownsTable = fillMarkdownsTable;
