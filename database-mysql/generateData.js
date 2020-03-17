const faker = require('faker');

//  ******************  helper  ******************
const randomNumber = function(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//  ******************  generates location data  ******************
const generateUSlocation = function () {
  let state = faker.address.stateAbbr();
  let city = faker.address.city();
  let country = 'United States of America';
  return {country, state, city};
};

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


//  ******************  generates shipping data  ******************
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
};

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
};

//  ******************  generates item data  ******************

// the first several are required fields - cannot be null
const generateTitle = function () {
  let pieces = [];
  let additional = '';

  if (randomNumber(1)) {
    pieces.push(faker.commerce.color());
  }
  if (randomNumber(1)) {
    pieces.push(faker.commerce.productAdjective());
  }
  pieces.push(faker.commerce.productName());
  if (randomNumber(1)) {
    additional = ` with ${faker.commerce.productName()}`;
  }

  let title = [...pieces].join(' ');
  title = `${title}${additional}`

  return title;
};

const generatePrice = function () {
  let price = faker.commerce.price();
  return price;
};

const generateMaterials = function () {
  let numMaterials = randomNumber(4, 1);
  let materials = new Set;
  for (let i = 1; i <= numMaterials; i++) {
    let newMat = faker.commerce.productMaterial();
    materials.add(newMat);
  }

  return [...materials].join(', ');
};

const generateDescription = function () {
  return faker.lorem.paragraphs();
};

const generatePolicies = function () {
  return faker.lorem.paragraphs();
};

const generateReturnSynopsis = function () {
  return faker.lorem.lines();
};

// the rest of these fields CAN be null
const generateDimensions = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  let dimensions = '';
  if (!randomNumber(3)) {
    let scale = ['inches' ,'feet'];
    let length = randomNumber(6, 2);
    dimensions += `Length: ${length} ${scale[randomNumber(1)]}`;
    if (!randomNumber(3)) {
      let width = randomNumber(6, 2);
      dimensions += `, Width: ${width} ${scale[randomNumber(1)]}`
    }
  }
  if (dimensions.length > 0) {
    updatedItem.dimensions = dimensions;
  }
  return updatedItem;
};

// max_order_qty
const generateMaxOrderQty = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  if (!randomNumber(3)) {
    updatedItem.max_order_qty = randomNumber(25, 3);
  }
  return updatedItem;
};

const generateReturnsCondition = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  if (!randomNumber(2)) {
    updatedItem.returns_condition = faker.lorem.paragraphs();
  }
  return updatedItem;
};

const generateInventoryCount = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  let min = 1;
  if (updatedItem.max_order_qty) {
    min = updatedItem.max_order_qty;
  }
  updatedItem.inventory_count = randomNumber(40, min);
  return updatedItem;
};

const generateInOtherCarts = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  if (!randomNumber(2)) {
    let max = 20;
    if (updatedItem.inventory_count) {
      max = updatedItem.inventory_count;
    }
    updatedItem.in_other_carts = randomNumber(max, 1);
  }
  return updatedItem;
};

// true/false: giftWrap, faqs, bestseller, personalizable, handmade, vintage
const generateDescriptorFlags = function (itemSoFar) {
  let updatedItem = {...itemSoFar};
  updatedItem.giftWrap = 0;
  updatedItem.faqs = 0;
  updatedItem.bestseller = 0;
  updatedItem.personalizable = 1;
  updatedItem.handmade = 0;
  updatedItem.vintage = 0;
  if (!randomNumber(2)) {
    updatedItem.giftWrap = 1;
  }
  if (!randomNumber(2)) {
    updatedItem.faqs = 1;
  }
  if (!randomNumber(2)) {
    updatedItem.bestseller = 1;
  }
  if (!randomNumber(2)) {
    updatedItem.personalizable = 1;
  }
  if (!!randomNumber(5)) {
    updatedItem.handmade = 1;
  }
  if (!randomNumber(2)) {
    updatedItem.vintage = 1;
  }

  return updatedItem;
};

const generateItemRequiredFields = function () {
  let title = generateTitle();
  let price = generatePrice();
  let shipping_id = randomNumber(100, 1);
  let materials = generateMaterials();
  let description = generateDescription();
  let location_id = randomNumber(100, 1);
  let policies = generatePolicies();
  let returnSynopsis = generateReturnSynopsis();
  return {title, price, shipping_id, materials, description, location_id, policies, returnSynopsis};
};

const addOptionals = function (basicItem) {
  let item = generateDimensions(basicItem);
  item = generateMaxOrderQty(item);
  item = generateReturnsCondition(item);
  item = generateInventoryCount(item);
  item = generateInOtherCarts(item);
  item = generateDescriptorFlags(item);

  return item;
};

const generateItem = function () {
  let item = generateItemRequiredFields();
  item = addOptionals(item);

  return item;
};

const generateItems = function () {
  let items = [];
  for (let i = 1; i <= 100; i++) {
    items.push(generateItem());
  }
  return items;
};


//  ******************  generates options data  ******************
/*
OPTIONS
+---------+----------+------+-----+---------+----------------+
| Field   | Type     | Null | Key | Default | Extra          |
+---------+----------+------+-----+---------+----------------+
| id      | int(11)  | NO   | PRI | NULL    | auto_increment |
| item_id | int(11)  | NO   | MUL | NULL    |                |
| title   | char(20) | NO   |     | NULL    |                |
| list    | text     | NO   |     | NULL    |                |
+---------+----------+------+-----+---------+----------------+

types of options...
color
size
-- blah x blah (price)
-- clothing size
height
orientation
--- horizontal, vertical
*/

const getRandomDimensionUnit = function () {
  let dimensions = ['centimeter', 'inch', 'foot', 'meter'];
  let index = randomNumber(3);
  return dimensions[index];
}

const pluralizeUnit = function (dimension) {
  if (dimension === 'inch') {
    return 'inches';
  } else if (dimension === 'foot') {
    return 'feet';
  }
  return dimension + 's';
}

const makeSizeOption = function () {
  let sizeList = [];
  if (!randomNumber(3)) {
    sizeList = ['small', 'medium', 'large'];
  } else {
    let numSizes = randomNumber(5, 2);
    let unitOne = getRandomDimensionUnit();
    let unitTwo = unitOne;
    let dimensionOne = randomNumber(4, 1);
    let dimensionTwo = randomNumber(4, 1);
    if (dimensionOne > 1) {
      unitOne = pluralizeUnit(unitOne);
    }
    if (dimensionTwo > 1) {
      unitTwo = pluralizeUnit(unitTwo);
    }
    for (let i = 0; i < numSizes; i++) {
      let step = i * 3;
      sizeList.push(`${dimensionOne + step} ${unitOne} x ${dimensionTwo +  step} ${unitTwo}`);
    }
  }
  return [...sizeList].join(',' );
};

const makeColorOption = function () {
  let colors = new Set();
  let numColors = randomNumber(7, 3);
  for (let i = 0; i < numColors; i++) {
    colors.add(faker.commerce.color());
  }
  return [...colors].join(',');
};

const makeHeightOption = function () {
  let heights = [];
  let numHeights = randomNumber(6, 3);
  // get a unit type
  let unit = getRandomDimensionUnit();
  // get plural of it
  let units = pluralizeUnit(unit);
  heights.push(`1 ${unit}`);
  // iterate numHeights
  for (let i = 2; i < numHeights; i++) {
    // construct array
    heights.push(`${i} ${units}`);
  }
  // return string from array
  return [...heights].join(',');
};

const makeOrientationOption = function () {
  return 'horizontal,vertical';
};

const generateOneOption = function (type) {
  let result = '';
  if (type === 'size') {
    result = makeSizeOption();
  } else if (type === 'color') {
    result = makeColorOption();
  } else if (type === 'height') {
    result = makeHeightOption();
  } else {
    result = makeOrientationOption();
  }
  return result;
};

const generateOptionsForItem = function () {
  let results = {}
  let optionTypes = ['size', 'color', 'height', 'orientation'];
  let numOptions;
  if (!faker.random.boolean()) {
    return null;
  }
  numOptions = randomNumber(3, 1);
  for (let i = 1; i <= numOptions; i++) {
    let optionIndex = randomNumber(optionTypes.length - 1);
    let optionValue = generateOneOption(optionTypes[optionIndex]);
    results[optionTypes[optionIndex]] = optionValue;
    optionTypes.splice(optionIndex, 1);
  }
  return results;
};

const generateOptiosForAllItems = function () {
  let results = [];

  for (let i = 0; i < 100; i++) {
    let options = generateOptionsForItem();
    results.push(options);
  }

  return results;
};


//  ******************  generates sales data  ******************


let allOptions = generateOptiosForAllItems();
console.log(allOptions);
console.log(allOptions.length);

exports.populateDb;