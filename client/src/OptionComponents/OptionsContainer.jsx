import React from 'react';
import PropTypes from 'prop-types';
import ChoicesContainer from './ChoicesContainer';
import PersonalizeContainer from './PersonalizeContainer';
import QuantityContainer from './QuantityContainer';
import SellingFlagsContainer from './SellingFlagsContainer';

function OptionsContainer({ optionsData }) {
  const {
    options,
    personalizable,
    maxOrderQty,
    inventoryCount,
    inOtherCarts,
    type,
    free,
  } = optionsData;
  const areOptions = (options && options.length > 0);
  return (
    <div className="options-container">
      {areOptions
        && options.map(({ title, list }) => (
          <ChoicesContainer key={title} title={title} list={list} />
        ))}
      {!!personalizable
        && <PersonalizeContainer />}
      {!!maxOrderQty
        && <QuantityContainer maxOrderQty={maxOrderQty} />}
      <button type="button" className="add-to-cart">Add to Cart</button>
      <SellingFlagsContainer
        inventory={inventoryCount}
        inOtherCarts={inOtherCarts}
        shipType={type}
        freeShip={free}
      />
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
