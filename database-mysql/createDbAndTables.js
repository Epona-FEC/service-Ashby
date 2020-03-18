const mysql = require('mysql');
const insertData = require('./insertData');

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


// ***********  db creation  ***********
dbConnection.query(
  'DROP DATABASE IF EXISTS etsy_products',
  function (err) {
    if (err) {
      console.error('db drop error', err);
    }
  }
);

dbConnection.query(
  'CREATE DATABASE etsy_products',
  function (err) {
    if (err) {
      console.error('db creation error', err);
    }
  }
);

dbConnection.query('USE etsy_products');


//  *********** table creation  ***********
dbConnection.query(
  `CREATE TABLE IF NOT EXISTS shipping (
    id        INT       NOT NULL AUTO_INCREMENT,
    type      CHAR(13)  NOT NULL,
    free      BOOLEAN   NOT NULL,
    timeframe CHAR(30),
    PRIMARY KEY (id)
  )`,
  function (err) {
    if (err) {
      console.error('shipping table creation error', err);
    }
  }
);

dbConnection.query(
  `CREATE TABLE IF NOT EXISTS locations (
    id          INT       NOT NULL AUTO_INCREMENT,
    country     CHAR(50)  NOT NULL,
    state       CHAR(50),
    city        CHAR(50),
    PRIMARY KEY (id)
  )`,
  function (err) {
    if (err) {
      console.error('loations table creation error', err);
    }
  }
);

dbConnection.query(
  `CREATE TABLE IF NOT EXISTS items (
    id                INT           NOT NULL AUTO_INCREMENT,
    title             CHAR(180)     NOT NULL,
    price             FLOAT(7, 2)   NOT NULL,
    shipping_id       INT           NOT NULL,
    materials         CHAR(180)     NOT NULL,
    description       TEXT          NOT NULL,
    location_id       INT           NOT NULL,
    policies          TEXT          NOT NULL,
    return_synopsis   CHAR(100)     NOT NULL,
    dimensions        VARCHAR(100),
    max_order_qty     INT,
    returns_condition TEXT,
    inventory_count   INT,
    in_other_carts    INT,
    gift_wrap         BOOLEAN,
    faqs              BOOLEAN,
    bestseller        BOOLEAN,
    personalizable    BOOLEAN,
    handmade          BOOLEAN,
    vintage           BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (shipping_id)
      REFERENCES shipping(id),
    FOREIGN KEY (location_id)
      REFERENCES locations(id)
  )`,
  function (err) {
    if (err) {
      console.error('items table creation error', err);
    }
  }
);

dbConnection.query(
  `CREATE TABLE IF NOT EXISTS options (
    id        INT       NOT NULL AUTO_INCREMENT,
    item_id   INT       NOT NULL,
    title     CHAR(20)  NOT NULL,
    list      TEXT      NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id)
      REFERENCES items(id)
  )`,
  function (err) {
    if (err) {
      console.error('options table creation error', err);
    }
  }
);

dbConnection.query(
  `CREATE TABLE IF NOT EXISTS markdowns (
    id          INT   NOT NULL AUTO_INCREMENT,
    item_id     INT   NOT NULL,
    discount    INT   NOT NULL,
    end_date    date,
    PRIMARY KEY (id),
    FOREIGN KEY (item_id)
      REFERENCES items(id)
  )`,
  function (err) {
    if (err) {
      console.error('sales table creation error', err);
    }
  }
);

// **************  populate tables with fake data  **************
insertData.fillLocationsTable(dbConnection, (err, result) => {
  if (err) {
    console.error('db locations data insertion error:', err);
  }
});

insertData.fillShippingTable(dbConnection, (err, result) => {
  if (err) {
    console.error('db shipping data insertion error:', err);
  }
});

insertData.fillItemsTable(dbConnection, (err, result) => {
  if (err) {
    console.error('db items data insertion error:', err);
  }
});

insertData.fillOptionsTable(dbConnection, (err, result) => {
  if (err) {
    console.error('db options data insertion error:', err);
  }
});

insertData.fillMarkdownsTable(dbConnection, (err, result) => {
  if (err) {
    console.error('db markdowns data insertion error:', err);
  }
});


dbConnection.end();