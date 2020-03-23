import React from 'react';
import PropTypes from 'prop-types';
import ChoicesContainer from './ChoicesContainer';
import PersonalizeContainer from './PersonalizeContainer';
import QuantityContainer from './QuantityContainer';
import SellingFlagsContainer from './SellingFlagsContainer';

function OptionsContainer({ optionsData }) {
  const {
    id,
    options,
    personalizable,
    maxOrderQty,
    inventoryCount,
    inOtherCarts,
    type,
    free,
  } = optionsData;
  const areOptions = (options && options.length > 0);
  // console.log('number of options:', options.length, 'areOptions is', areOptions);
  console.log('in options container, options is:', options);
  return (
    <div className="options-container">
      {/* <ChoicesContainer option={options[0]} />  ---> making errors pre-data */}
      {areOptions
        // && <ChoicesContainer option={options[0]} /> } --> this will finally put data through
        && options.map(({ title, list }) => (
          <ChoicesContainer key={title} title={title} list={list} />
        ))}
      <PersonalizeContainer />
      <QuantityContainer />
      <div>Button: Add to Cart</div>
      <SellingFlagsContainer />
    </div>
  );
}

OptionsContainer.propTypes = {
  optionsData: PropTypes.shape({
    id: PropTypes.number,
    options: PropTypes.array,
    personalizable: PropTypes.number,
    maxOrderQty: PropTypes.number,
    inventoryCount: PropTypes.number,
    inOtherCarts: PropTypes.number,
    type: PropTypes.string,
    free: PropTypes.number,
  }).isRequired,
};

export default OptionsContainer;

/*
Options Container
---
| Choices Container
| ---
| | (options, may be more than one - in dropdowns)
| | title of option
| | dropdown - populate with option list
| ---
|
| Personalize Container
| ---
| | (personalization - includes text area)
| | personalization label
| | text area for pers.
| ---
|
| Quantity Container
| ---
| | (quantity can place an order for in dropdown)
| | quantity label
| | quantity dropdown - up to max order qty
| ---
|
| !button - add to cart
|
| SellingFlags Container
| ---
| | (digital download)
| | (free shipping icon & note)
| | (low stock icon & note)
| | (in other carts icon & note)
| ---
---
*/
