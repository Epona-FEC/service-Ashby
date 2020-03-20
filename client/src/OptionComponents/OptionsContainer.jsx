import React from 'react';
import ChoicesContainer from './ChoicesContainer';
import PersonalizeContainer from './PersonalizeContainer';
import QuantityContainer from './QuantityContainer';
import SellingFlagsContainer from './SellingFlagsContainer';

function OptionsContainer() {
  return (
    <div>
      <ChoicesContainer />
      <PersonalizeContainer />
      <QuantityContainer />
      <div>Button: Add to Cart</div>
      <SellingFlagsContainer />
    </div>
  );
}

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
