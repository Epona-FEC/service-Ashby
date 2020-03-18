const db = require('./model.js');


const allItems = function (callback) {
  console.log('in database/index/allItems');
  db.selectAllItems((error, results, fields) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results, fields);
    }
  });
};

exports.allItems = allItems;
