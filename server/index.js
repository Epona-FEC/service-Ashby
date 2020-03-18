const express = require('express');
const morgan = require('morgan');
const data = require('../database-mysql/index');

const app = express();
const port = 3004;

app.use(morgan('dev'));


/*

  routes needed:
GET: /items
  Returns all items
GET: /item/:itemId
  Returns json data with item details
GET: /shipping/:{itemId, country, code}
  Returns shipping cost to country and zip/postal code provided
*/


// function here to return a promise for fetching all items
const fetchAllItems = function (callback) {
  console.log('in server/index/fetchAllItems');
  data.allItems((error, results, fields) => {
    if (error) {
      console.error('error fetching all items from database', error);
      callback('DB ERROR');
    } else {
      console.log('results:', results);
      console.log('fields:', fields);
      callback(null, results);
    }
  });
};


app.get('/items', (req, res) => {
  fetchAllItems((error, results) => {
    if (error) {
      console.error(error);
      res.status(404).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

// app.get('/item/:itemId', (req, res) => {
//   res.sendStatus(200);
// });

// app.get('/shipping/:{itemId, country, code}', (req, res) => {
//   res.sendStatus(200);
// });

app.listen(port, () => {
  console.log('Express server for item detail now listening on port 3004');
});

