const faker = require('faker');

//  ******************  helper  ******************
const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

//  ******************  generates location data  ******************
const generateUSlocation = () => {
  const state = faker.address.stateAbbr();
  const city = faker.address.city();

  const country = 'United States of America';
  return [country, state, city];
};

const generateAllLocations = () => {
  const places = [];

  for (let i = 0; i < 100; i += 1) {
    if (faker.random.boolean()) {
      places.push(generateUSlocation());
    } else {
      const country = faker.address.country();
      places.push([country, null, null]);
    }
  }

  return places;
};


//  ******************  generates shipping data  ******************
const generateStartAndEnd = (daysWeeksMonths) => {
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
  return { start, end };
};

const generateAllShipping = () => {
  const types = ['US', 'international', 'digital', 'US', 'international'];
  const timeframes = ['days', 'weeks', 'days', 'months', 'days'];
  const shippingOptions = [];

  for (let i = 0; i < 100; i += 1) {
    const type = types[randomNumber(4)];
    let free;
    if (type === 'digital') {
      free = 1; // 'true'
    } else {
      free = randomNumber(1);
    }
    let timeframe = timeframes[randomNumber(4)];
    const startAndEnd = generateStartAndEnd(timeframe);
    timeframe = `${startAndEnd.start} - ${startAndEnd.end} ${timeframe}`;
    const shipping = [type, free, timeframe];
    shippingOptions.push(shipping);
  }

  return shippingOptions;
};

//  ******************  generates item data  ******************

// the first several are required fields - cannot be null
const generateTitle = () => {
  const pieces = [];
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
  title = `${title}${additional}`;

  return title;
};

const generatePrice = () => {
  const price = faker.commerce.price();
  return price;
};

const generateMaterials = () => {
  const numMaterials = randomNumber(4, 1);
  const materials = new Set();
  for (let i = 1; i <= numMaterials; i += 1) {
    const newMat = faker.commerce.productMaterial();
    materials.add(newMat);
  }

  return [...materials].join(', ');
};

const generateDescription = () => faker.lorem.paragraphs();

const generatePolicies = () => faker.lorem.paragraphs();

const generateReturnSynopsis = () => faker.lorem.sentence();

// the rest of these fields CAN be null
const generateDimensions = () => {
  let dimensions = null;
  if (!randomNumber(3)) {
    const scale = ['inches', 'feet'];
    const length = randomNumber(6, 2);
    dimensions = `Length: ${length} ${scale[randomNumber(1)]}`;
    if (!randomNumber(3)) {
      const width = randomNumber(6, 2);
      dimensions += `, Width: ${width} ${scale[randomNumber(1)]}`;
    }
  }
  return dimensions;
};

const generateMaxOrderQty = () => {
  let maxOrderQty = null;
  if (!randomNumber(2)) {
    maxOrderQty = randomNumber(25, 3);
  }
  return maxOrderQty;
};

const generateReturnsCondition = () => {
  let returnsCondition = null;
  if (!randomNumber(2)) {
    returnsCondition = faker.lorem.paragraphs();
  }
  return returnsCondition;
};

const getInventoryCount = (maxOrderQty) => {
  let min = 1;
  if (maxOrderQty !== null) {
    min = maxOrderQty;
  }
  return randomNumber(40, min);
};

const generateInOtherCarts = (itemSoFar, inventoryCount) => {
  const updatedItem = [...itemSoFar];
  let inOtherCarts;
  if (faker.random.boolean()) {
    let max = 20;
    if (inventoryCount !== null) {
      max = inventoryCount;
    }
    inOtherCarts = randomNumber(max, 1);
  } else {
    inOtherCarts = null;
  }
  updatedItem.push(inOtherCarts);
  return updatedItem;
};

// true/false: giftWrap, faqs, bestseller, personalizable, handmade, vintage
const generateDescriptorFlags = (itemSoFar) => {
  const updatedItem = [...itemSoFar];

  const giftWrap = randomNumber(1);
  const faqs = randomNumber(1);
  const bestseller = randomNumber(1);
  const personalizable = randomNumber(1);
  const handmade = randomNumber(1);
  const vintage = randomNumber(1);

  updatedItem.push(giftWrap);
  updatedItem.push(faqs);
  updatedItem.push(bestseller);
  updatedItem.push(personalizable);
  updatedItem.push(handmade);
  updatedItem.push(vintage);

  return updatedItem;
};

const generateItemRequiredFields = () => {
  const result = [];

  const title = generateTitle();
  const price = generatePrice();
  const shippingId = randomNumber(100, 1);
  const materials = generateMaterials();
  const description = generateDescription();
  const locationId = randomNumber(100, 1);
  const policies = generatePolicies();
  const returnSynopsis = generateReturnSynopsis();

  result.push(title);
  result.push(price);
  result.push(shippingId);
  result.push(materials);
  result.push(description);
  result.push(locationId);
  result.push(policies);
  result.push(returnSynopsis);
  return result;
};

const addOptionals = (basicItem) => {
  let item = [...basicItem];

  item.push(generateDimensions());
  const maxOrderQty = generateMaxOrderQty();
  item.push(maxOrderQty);
  item.push(generateReturnsCondition());
  const inventoryCount = getInventoryCount(maxOrderQty);
  item.push(inventoryCount);
  item = generateInOtherCarts(item, inventoryCount);
  item = generateDescriptorFlags(item);
  return item;
};

const generateItem = () => {
  let item = generateItemRequiredFields();
  item = addOptionals(item);

  return item;
};

const generateAllItems = () => {
  const items = [];
  for (let i = 1; i <= 100; i += 1) {
    items.push(generateItem());
  }
  return items;
};


//  ******************  generates options data  ******************

const getRandomDimensionUnit = () => {
  const dimensions = ['centimeter', 'inch', 'foot', 'meter'];
  const index = randomNumber(3);
  return dimensions[index];
};

const pluralizeUnit = (dimension) => {
  if (dimension === 'inch') {
    return 'inches';
  }
  if (dimension === 'foot') {
    return 'feet';
  }
  return `${dimension}s`;
};

const makeSizeOption = () => {
  let sizeList = [];
  if (!randomNumber(3)) {
    sizeList = ['small', 'medium', 'large'];
  } else {
    const numSizes = randomNumber(5, 2);
    let unitOne = getRandomDimensionUnit();
    let unitTwo = unitOne;
    const dimensionOne = randomNumber(4, 1);
    const dimensionTwo = randomNumber(4, 1);
    if (dimensionOne > 1) {
      unitOne = pluralizeUnit(unitOne);
    }
    if (dimensionTwo > 1) {
      unitTwo = pluralizeUnit(unitTwo);
    }
    for (let i = 0; i < numSizes; i += 1) {
      const step = i * 3;
      sizeList.push(`${dimensionOne + step} ${unitOne} x ${dimensionTwo + step} ${unitTwo}`);
    }
  }
  return [...sizeList].join(',');
};

const makeColorOption = () => {
  const colors = new Set();
  const numColors = randomNumber(7, 3);
  for (let i = 0; i < numColors; i += 1) {
    colors.add(faker.commerce.color());
  }
  return [...colors].join(',');
};

const makeHeightOption = () => {
  const heights = [];
  const numHeights = randomNumber(6, 3);
  const unit = getRandomDimensionUnit();
  const units = pluralizeUnit(unit);
  heights.push(`1 ${unit}`);
  for (let i = 2; i < numHeights; i += 1) {
    heights.push(`${i} ${units}`);
  }
  return [...heights].join(',');
};

const makeOrientationOption = () => 'horizontal,vertical';

const generateOneOption = (type) => {
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

const generateOptionsForItem = () => {
  const results = [];
  const optionTypes = ['size', 'color', 'height', 'orientation'];
  const numOptions = randomNumber(3);
  for (let i = 1; i <= numOptions; i += 1) {
    const optionTypeIndex = randomNumber(optionTypes.length - 1);

    const optionTitle = optionTypes[optionTypeIndex];
    const optionList = generateOneOption(optionTypes[optionTypeIndex]);
    const option = [optionTitle, optionList];
    results.push(option);

    optionTypes.splice(optionTypeIndex, 1);
  }
  return results;
};

const generateAllOptions = () => {
  const results = [];

  for (let i = 0; i < 100; i += 1) {
    const itemId = i + 1;
    const options = generateOptionsForItem();
    for (let j = 0; j < options.length; j += 1) {
      results.push([itemId, ...options[j]]);
    }
  }
  return results;
};


//  ******************  generates markdowns data  ******************
const makeRandomDiscount = () => {
  const discount = randomNumber(70, 5);
  return discount;
};

const makeEndDate = () => faker.date.future();

const generateOneMarkdown = () => {
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

const generateAllMarkdowns = () => {
  const results = [];
  let itemId;

  for (let i = 0; i < 100; i += 1) {
    itemId = i + 1;
    const markdown = generateOneMarkdown();
    if (markdown.length > 0) {
      results.push([itemId, ...markdown]);
    }
  }

  return results;
};


exports.generateAllLocations = generateAllLocations;
exports.generateAllShipping = generateAllShipping;
exports.generateAllItems = generateAllItems;
exports.generateAllOptions = generateAllOptions;
exports.generateAllMarkdowns = generateAllMarkdowns;
