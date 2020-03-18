const express = require('express');
const morgan = require('morgan');
const data = require('../database-mysql');

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


app.get('/items', (req, res) => {
  res.sendStatus(200);
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

