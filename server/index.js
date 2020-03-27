const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const data = require('../database-mysql/index');

const app = express();
const port = 3002;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('client/dist'));
app.use(express.static('public'));

// ********************  data fetching  ********************

const fetchAllItems = function fetchAll(callback) {
  data.allItems((error, results) => {
    if (error) {
      callback('DB ERROR');
    } else {
      callback(null, results);
    }
  });
};

const fetchOneItem = function fetchOne(itemId, callback) {
  data.oneItem(itemId, (error, results) => {
    if (error) {
      callback('DB ERROR');
    } else {
      callback(null, results);
    }
  });
};

const getShippingFee = function getShippingFee() {
  const fee = '6.99';
  return fee;
};


// ********************  routing  ********************

app.get('/items', (req, res) => {
  fetchAllItems((error, results) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});
// manual test with:
// curl -i http://localhost:3002/items

app.get('/item/:itemId', (req, res) => {
  const { itemId } = req.params;
  if ((itemId < 1) || (itemId > 100)) {
    res.status(404).send('item number out of range');
  } else {
    fetchOneItem(itemId, (error, results) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.status(200).send(results);
      }
    });
  }
});
// manual test with:
// curl -i http://localhost:3002/item/5

app.get('/shipping/:itemId', (req, res) => {
  const fee = getShippingFee();
  res.status(200).send(fee);
});
// manual test with:
// curl -i http://localhost:3002/shipping/1


app.listen(port, () => {
  console.log(`Express server for item detail now listening on port ${port}`);
});
