const faker = require('faker');


const generateLocations = function () {
  let places = [];

  for (var i = 1; i <= 50; i++) {
    let country = faker.address.country();
    if (country === 'United States of America') {
      let state = faker.address.stateAbbr();
      let city = faker.address.city();
      places.push({country, state, city});
    } else {
      places.push({country});
    }
  }
  for (; i <= 100; i++) {
    let country = 'United States of America';
    let state = faker.address.stateAbbr();
    let city = faker.address.city();
    places.push({country, state, city});
  }

  return places;
};

const generateShipping = function () {
  // types of delivery - make digital less likely than us or international
  let types = ['US', 'international', 'digital', 'US', 'international'];
  let timeframes = ['days', 'weeks', 'days', 'months', 'days'];
  let shippingOptions = [];

  for (let i = 0; i <= 100; i++) {
    let type = types[Math.floor(Math.random() * (4 + 1))];
    let free;
    if (type === 'digital') {
      free = 1; // 'true'
    } else {
      free = Math.floor(Math.random() * (2));
    };
    let timeframe = timeframes[Math.floor(Math.random() * (4 + 1))];
    let start;
    let end;
    if (timeframe === 'days') {
      start = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      end = Math.floor(Math.random() * (12 - start + 2) + start + 1);
    } else if (timeframe === 'weeks') {
      start = 1;
      end = Math.floor(Math.random() * (3 - 2 + 1) + 2);
    } else {
      start = 1;
      end = 2;
    }
    console.log('start:', start, ', end:', end);
    timeframe = `${start} - ${end} ${timeframe}`
    let shipping = {type, free, timeframe};
    shippingOptions.push(shipping);
  }

  return shippingOptions;
}

console.log(generateShipping());

exports.populateDb;