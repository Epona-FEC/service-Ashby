/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import CostContainer from './CostComponents/CostContainer';
import OptionsContainer from './OptionComponents/OptionsContainer';
import DetailsContainer from './DetailsComponents/DetailsContainer';
import ShippingContainer from './ShippingComponents/ShippingContainer';
import PoliciesContainer from './PoliciesComponents/PoliciesContainer';

// class ItemDetails extends React.Component {
//   constructor () {
//     super ();

function ItemDetails() {
  // render() {
  return (
    <div>
      <h1>item name goes here</h1>
      <CostContainer />
      <OptionsContainer />
      <DetailsContainer />
      <ShippingContainer />
      <PoliciesContainer />
    </div>
  );
  // };
}

ReactDOM.render(<ItemDetails />, document.getElementById('item-details'));

/*
visual on ideas for component layout

!title

Cost Container
---
| (bestseller tag)
|
| PriceNow   NormalFullPrice (seperate component? part of pricenow?)
| ---       ---
| |!price   | (sale adjust)
| ---       ---
|
| Markdown Container
| ---
| |(savings)
| |(sales ending tag - time remaining)
| ---
---

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

Details Container
---
| Style Flags Container
| ---
| | (handmade icon)
| | (vintage icon)
| ---
|
| Materials Container
| ---
| | !material(s) - mini header and large text
|  |               (if several, does a "more" underlined that shows the rest)
| | materials header
| | ---
| | | materials list - limit display to one line w/ a click to expand
| | ---
| ---
|
| Description Container
| ---
| | (dimensions -  mini header and larg text)
| | !description - mini header with a bit larger text,
| |             has "Learn more about this item button" to show the rest
| | description header
| | actual description - limit display size
| | button - opens rest of description
| ---
---

Shipping Container
---
| Timeframe Container                 Ship Source Container
| ---                                 ---
| | "Ready to ship in"   <whitespace> | "From"
| | timeframe            <whitespace> | country/state/city
| ---                                 ---
|
| ("Cost to ship" --> not there for digital)
| (shipping cost)
| (Get shipping cost - button, includes down/up carrot to open shipping module
| shipping module - has dropdown for country (if int'l ship) --> not there for digital
| (return short blurb)
---

Policies Container
---
| shop policies - button that pops up shop policies reader that lays on top of page
| (terms and conditions - works like shop policies)
| (Gift wrapping available , dashed underline - hover brings up blurb)
| (FAQs - button just like shipping)
---

*/
