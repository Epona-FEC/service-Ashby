import React from 'react';
import PropTypes from 'prop-types';

function SellingFlagsContainer({
  inventory, inOtherCarts, shipType, freeShip,
}) {
  let digital = false;
  if (shipType === 'digital') {
    digital = true;
  }
  return (
    <div className="selling-flags-container">

      {!!digital
        && <div className="selling-flag digital-download">digital download</div>}
      {!!freeShip
        && <div className="selling-flag free-shipping">free shipping</div>}
      {!!inventory
        && (
        <div className="selling-flag low-stock">
          Last Chance:
          {inventory}
          left in stock
        </div>
        )}
      {!!inOtherCarts
        && (
        <div className="selling-flag other-carts">
          Hot item:
          {inOtherCarts}
          in other carts
        </div>
        )}
    </div>
  );
}

SellingFlagsContainer.propTypes = {
  inventory: PropTypes.number,
  inOtherCarts: PropTypes.number,
  shipType: PropTypes.string,
  freeShip: PropTypes.number,
};

SellingFlagsContainer.defaultProps = {
  inventory: null,
  inOtherCarts: null,
  shipType: null,
  freeShip: null,
};

export default SellingFlagsContainer;

/*
| SellingFlags Container
| ---
| | (digital download)
| | (free shipping icon & note)
| | (low stock icon & note)
| | (in other carts icon & note)
| ---
*/
