import React from 'react';

function QuantityContainer() {
  return (
    <div className="quantity-container">
      <div>(quantity label)</div>
      <div>(quantity dropdown)</div>
    </div>
  );
}

export default QuantityContainer;

/*
| Quantity Container
| ---
| | (quantity can place an order for in dropdown)
| | quantity label
| | quantity dropdown - up to max order qty
| ---
*/
