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
        && (
        <div className="selling-flag">
          <img src="download.png" alt="digital download" />
          <div className="digital-download">digital download</div>
        </div>
        )}
      {!!freeShip
        && (
        <div className="selling-flag">
          <img src="truck.png" alt="delivery truck" />
          <div className="free-shipping">
            <strong>Hooray!</strong>
            &nbsp;This item ships free to the US.
          </div>
        </div>
        )}
      {!!inventory
        && (
        <div className="selling-flag">
          <img src="hourglass.png" alt="hourglass" />
          <div className="low-stock">
            <strong>Last Chance:</strong>
            &nbsp;
            {inventory}
            &nbsp;left in stock
          </div>
        </div>
        )}
      {!!inOtherCarts
        && (
        <div className="selling-flag">
          <img src="cart.png" alt="shopping cart" />
          <div className="other-carts">
            <strong>Hot item:</strong>
            &nbsp;
            {inOtherCarts}
            &nbsp;people have this in their carts right now.
          </div>
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
