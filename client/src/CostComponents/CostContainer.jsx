import React from 'react';
import PropTypes from 'prop-types';
import MarkdownContainer from './MarkdownContainer';

/*
id
bestseller
price
discount
endDate
*/
function CostContainer({ costData }) {
  const {
    bestseller, price, discount, endDate,
  } = costData;
  let currPrice = price;
  let priceDiff = 0;
  if (discount) {
    currPrice = (price - (price * discount) / 100).toFixed(2);
    priceDiff = price - currPrice;
  }
  return (
    <div className="cost-container">
      {!!bestseller && <div>It is a bestseller!</div>}
      <div className="current-price">
        $
        {currPrice}
      </div>
      {!!discount
        && <div className="original-price">{price}</div>}
      {/* will go to right of discounted price */}
      {!!discount
        && <MarkdownContainer savings={priceDiff} ending={endDate} />}
    </div>
  );
}

CostContainer.propTypes = {
  costData: PropTypes.shape({
    bestseller: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.number,
    endDate: PropTypes.string,
  }).isRequired,
};

export default CostContainer;

/*
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
*/
