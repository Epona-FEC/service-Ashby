const db = require('./model.js');


const allItems = function (callback) {
  console.log('in database/index/allItems');
  db.selectAllItems((error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const oneItem = function (itemId, callback) {
  console.log('in database/index/oneItem');
  db.selectOneItem(itemId, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
}

exports.allItems = allItems;
exports.oneItem = oneItem;
