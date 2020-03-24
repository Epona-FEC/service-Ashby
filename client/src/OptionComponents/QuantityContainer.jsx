import React from 'react';
import PropTypes from 'prop-types';

function QuantityContainer({ maxOrderQty }) {
  const quantities = [];
  for (let qty = 1; qty <= maxOrderQty; qty += 1) {
    quantities.push(qty);
  }
  return (
    <div className="quantity-container">
      {/* <div>(quantity label)</div> */}
      <label htmlFor="quantity-dropdown" className="quantity-label">
        Quantity
        <select id="quantity-dropdown">
          {quantities.map((quantity) => (
            <option key={quantity} value={quantity}>{quantity}</option>))}
        </select>
      </label>
    </div>
  );
}

QuantityContainer.propTypes = {
  maxOrderQty: PropTypes.number.isRequired,
};

export default QuantityContainer;

/*
| Quantity Container
| ---
| | (quantity can place an order for in dropdown)
| | quantity label
| | quantity dropdown - up to max order qty
| ---
*/
