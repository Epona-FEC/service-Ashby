const db = require('./model.js');


const allItems = function getAllItems(callback) {
  db.selectAllItems((error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const oneItem = function getOneItem(itemId, callback) {
  db.selectOneItem(itemId, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

exports.allItems = allItems;
exports.oneItem = oneItem;
