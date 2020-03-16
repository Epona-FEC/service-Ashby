const faker = require('faker');

const generateUSlocation = function () {
  let state = faker.address.stateAbbr();
  let city = faker.address.city();
  let country = 'United States of America';
  return {country, state, city};
}

const generateLocations = function () {
  let places = [];

  for (var i = 1; i <= 50; i++) {
    let country = faker.address.country();
    if (country === 'United States of America') {
      places.push(generateUSlocation());
    } else {
      places.push({country});
    }
  }
  for (; i <= 100; i++) {
    places.push(generateUSlocation());
  }

  return places;
};

const randomNumber = function(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateStartAndEnd = function (daysWeeksMonths) {
  let start;
  let end;

  if (daysWeeksMonths === 'days') {
    start = randomNumber(6, 1);
    end = randomNumber(start + 1, 13);
  } else if (daysWeeksMonths === 'weeks') {
    start = 1;
    end = randomNumber(3, 2);
  } else {
    start = 1;
    end = 2;
  }
  return {start, end};
}

const generateShipping = function () {
  let types = ['US', 'international', 'digital', 'US', 'international'];
  let timeframes = ['days', 'weeks', 'days', 'months', 'days'];
  let shippingOptions = [];

  for (let i = 0; i < 100; i++) {
    let type = types[randomNumber(4)];
    let free;
    if (type === 'digital') {
      free = 1; // 'true'
    } else {
      free = randomNumber(1);
    };
    let timeframe = timeframes[randomNumber(4)];
    let startAndEnd = generateStartAndEnd(timeframe);
    timeframe = `${startAndEnd.start} - ${startAndEnd.end} ${timeframe}`
    let shipping = {type, free, timeframe};
    shippingOptions.push(shipping);
  }

  return shippingOptions;
}

// console.log(generateShipping());
// console.log(generateLocations());

exports.populateDb;