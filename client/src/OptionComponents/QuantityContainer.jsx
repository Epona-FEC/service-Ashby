import React from 'react';
import PropTypes from 'prop-types';

function QuantityContainer({ maxOrderQty }) {
  const quantities = [];
  for (let qty = 1; qty <= maxOrderQty; qty += 1) {
    quantities.push(qty);
  }
  return (
    <div className="quantity-container">
      <div className="quantity-label">
        Quantity
      </div>
      <select id="quantity-dropdown">
        {quantities.map((quantity) => (
          <option key={quantity} value={quantity}>
            &nbsp;&nbsp;
            {quantity}
          </option>
        ))}
      </select>

    </div>
  );
}

QuantityContainer.propTypes = {
  maxOrderQty: PropTypes.number,
};

QuantityContainer.defaultProps = {
  maxOrderQty: 0,
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
