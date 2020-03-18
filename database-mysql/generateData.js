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
  return [country, state, city];
};

const generateAllLocations = function () {
  let places = [];

  for (let i = 0; i < 100; i++) {
    if (faker.random.boolean()) {
      places.push(generateUSlocation());
    } else {
      let country = faker.address.country();
      places.push([country, null, null]);
    }
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

const generateAllShipping = function () {
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
    let shipping = [type, free, timeframe];
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
  return faker.lorem.sentence();
};

// the rest of these fields CAN be null
const generateDimensions = function () {
  let dimensions = null;
  if (!randomNumber(3)) {
    let scale = ['inches' ,'feet'];
    let length = randomNumber(6, 2);
    dimensions = `Length: ${length} ${scale[randomNumber(1)]}`;
    if (!randomNumber(3)) {
      let width = randomNumber(6, 2);
      dimensions += `, Width: ${width} ${scale[randomNumber(1)]}`
    }
  }
  return dimensions;
};

const generateMaxOrderQty = function () {
  let max_order_qty;
  if (!randomNumber(3)) {
    max_order_qty = randomNumber(25, 3);
  } else {
    max_order_qty = null;
  }
  return max_order_qty;
};

const generateReturnsCondition = function () {
  let returns_condition;
  if (!randomNumber(2)) {
    returns_condition = faker.lorem.paragraphs();
  } else {
    returns_condition = null;
  }
  return returns_condition;
};

const addInventoryCount = function (itemSoFar) {
  let updatedItem = [...itemSoFar];
  let min = 1;
  // max_order_qty is at index 9 of itemSoFar
  if (updatedItem[9] !== null) {
    min = updatedItem[9];
  }
  updatedItem.push(randomNumber(40, min));
  return updatedItem;
};

const generateInOtherCarts = function (itemSoFar) {
  let updatedItem = [...itemSoFar];
  let inOtherCarts;
  if (faker.random.boolean()) {
    let max = 20;
    // inventory_count is at index 11 of itemSoFar
    if (updatedItem[11] !== null) {
      max = updatedItem[11];
    }
    inOtherCarts = randomNumber(max, 1);
  } else {
    inOtherCarts = null;
  }
  updatedItem.push(inOtherCarts);
  return updatedItem;
};

// true/false: giftWrap, faqs, bestseller, personalizable, handmade, vintage
const generateDescriptorFlags = function (itemSoFar) {
  let updatedItem = [...itemSoFar];

  let giftWrap = randomNumber(1);
  let faqs = randomNumber(1);
  let bestseller = randomNumber(1);;
  let personalizable = randomNumber(1);;
  let handmade = randomNumber(1);;
  let vintage = randomNumber(1);

  updatedItem.push(giftWrap);
  updatedItem.push(faqs);
  updatedItem.push(bestseller);
  updatedItem.push(personalizable);
  updatedItem.push(handmade);
  updatedItem.push(vintage);

  return updatedItem;
};

const generateItemRequiredFields = function () {
  let result = [];

  let title = generateTitle();
  let price = generatePrice();
  let shipping_id = randomNumber(100, 1);
  let materials = generateMaterials();
  let description = generateDescription();
  let location_id = randomNumber(100, 1);
  let policies = generatePolicies();
  let return_synopsis = generateReturnSynopsis();

  result.push(title);
  result.push(price);
  result.push(shipping_id);
  result.push(materials);
  result.push(description);
  result.push(location_id);
  result.push(policies);
  result.push(return_synopsis);
  return result;
};

const addOptionals = function (basicItem) {
  let item = [...basicItem];

  item.push(generateDimensions());
  item.push(generateMaxOrderQty());
  item.push(generateReturnsCondition());
  item = addInventoryCount(item);
  item = generateInOtherCarts(item);
  item = generateDescriptorFlags(item);
  return item;
};

const generateItem = function () {
  let item = generateItemRequiredFields();
  item = addOptionals(item);

  return item;
};

const generateAllItems = function () {
  let items = [];
  for (let i = 1; i <= 100; i++) {
    items.push(generateItem());
  }
  return items;
};


//  ******************  generates options data  ******************

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
  let unit = getRandomDimensionUnit();
  let units = pluralizeUnit(unit);
  heights.push(`1 ${unit}`);
  for (let i = 2; i < numHeights; i++) {
    heights.push(`${i} ${units}`);
  }
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
  let results = []
  let optionTypes = ['size', 'color', 'height', 'orientation'];
  let numOptions = randomNumber(3);
  for (let i = 1; i <= numOptions; i++) {
    let optionTypeIndex = randomNumber(optionTypes.length - 1);

    let optionTitle = optionTypes[optionTypeIndex];
    let optionList = generateOneOption(optionTypes[optionTypeIndex]);
    let option = [optionTitle, optionList];
    results.push(option);

    optionTypes.splice(optionTypeIndex, 1);
  }
  return results;
};

const generateAllOptions = function () {
  let results = [];

  for (let i = 0; i < 100; i++) {
    let item_id = i + 1;
    let options = generateOptionsForItem();
    for (let j = 0; j < options.length; j++) {
      results.push([item_id, ...options[j]]);
    }

  }
  return results;
};


//  ******************  generates markdowns data  ******************
const makeRandomDiscount = function () {
  let discount = randomNumber(70, 5);
  return discount;
};

const makeEndDate = function () {
  return faker.date.future();
};

const generateOneMarkdown = function () {
  let result = [];
  let discount = null;
  let end = null;
  if (faker.random.boolean()) {
    discount = makeRandomDiscount();
    if (faker.random.boolean()) {
      end = makeEndDate();
    }
    result = [discount, end];
  }
  return result;
};

const generateAllMarkdowns = function () {
  let results = [];
  let item_id;

  for (let i = 0; i < 100; i++) {
    item_id = i + 1;
    let markdown = generateOneMarkdown();
    if (markdown.length > 0) {
      results.push([item_id, ...markdown]);
    }
  }

  return results;
}


exports.generateAllLocations = generateAllLocations;
exports.generateAllShipping = generateAllShipping;
exports.generateAllItems = generateAllItems;
exports.generateAllOptions = generateAllOptions;
exports.generateAllMarkdowns = generateAllMarkdowns;