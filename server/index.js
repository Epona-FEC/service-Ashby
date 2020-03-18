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
GET: /shipping/:itemId
  Returns shipping cost
*/


const fetchAllItems = function (callback) {
  console.log('in server/index/fetchAllItems');
  data.allItems((error, results) => {
    if (error) {
      console.error('error fetching all items from database', error);
      callback('DB ERROR');
    } else {
      callback(null, results);
    }
  });
};

const fetchOneItem = function (itemId, callback) {
  console.log('in server/index/fetchOnetem');
  data.oneItem(itemId, (error, results) => {
    if (error) {
      console.error('error fetching one items from database', error);
      callback('DB ERROR');
    } else {
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
// curl -i http://localhost:3004/items

app.get('/item/:itemId', (req, res) => {
  let itemId = req.params.itemId;
  console.log(itemId);
  if ((itemId < 1) || (itemId > 100)) {
    res.status(404).send('item number out of range');
  } else {
    fetchOneItem(itemId, (error, results) => {
      if (error) {
        console.error(error);
        res.status(404).send(error);
      } else {
        res.status(200).send(results);
      }
    });
  }
});
// curl -i http://localhost:3004/item/1

app.get('/shipping/:itemId', (req, res) => {
  let itemId = req.params.itemId;
  console.log(itemId);
  res.status(404).send('returning shipping data not implemented yet');
});
// curl -i http://localhost:3004/shipping/1

app.listen(port, () => {
  console.log('Express server for item detail now listening on port 3004');
});

