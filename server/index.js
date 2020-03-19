const express = require('express');
const morgan = require('morgan');
const data = require('../database-mysql/index');

const app = express();
const port = 3004;

app.use(morgan('dev'));

app.use(express.static('client/dist'));


// ********************  data fetching  ********************

const fetchAllItems = function (callback) {
  data.allItems((error, results) => {
    if (error) {
      callback('DB ERROR');
    } else {
      callback(null, results);
    }
  });
};

const fetchOneItem = function (itemId, callback) {
  data.oneItem(itemId, (error, results) => {
    if (error) {
      callback('DB ERROR');
    } else {
      callback(null, results);
    }
  });
};

const getShippingFee = function () {
  let fee = '6.99';
  return fee;
};


// ********************  routing  ********************

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
// manual test with:
// curl -i http://localhost:3004/items

app.get('/item/:itemId', (req, res) => {
  let itemId = req.params.itemId;
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
// manual test with:
// curl -i http://localhost:3004/item/5

app.get('/shipping/:itemId', (req, res) => {
  let itemId = req.params.itemId;
  let fee = getShippingFee();
  res.status(200).send(fee);
});
// manual test with:
// curl -i http://localhost:3004/shipping/1


app.listen(port, () => {
  console.log('Express server for item detail now listening on port 3004');
});