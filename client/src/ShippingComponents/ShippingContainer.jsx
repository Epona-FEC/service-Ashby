import React from 'react';
import PropTypes from 'prop-types';
import TimeframeContainer from './TimeframeContainer';
import ShipSourceContainer from './ShipSourceContainer';


// Ideally would break this component out into another file:
function ShippingFee({ shipType, freeShip }) {
  if (shipType === 'digital') {
    return null;
  }
  if (freeShip) {
    return (
      <div>
        <div className="det-ship-cost-label">Cost to ship</div>
        <div className="det-shipping-fee">Free</div>
      </div>
    );
  }
  return (
    <div>
      <div className="det-ship-cost-label">Cost to ship</div>
      <div className="det-shipping-fee">$6.99</div>
    </div>
  );
}

ShippingFee.propTypes = {
  shipType: PropTypes.string.isRequired,
  freeShip: PropTypes.number.isRequired,
};

function ShippingContainer({ shippingData }) {
  const {
    shipType, freeShip, timeframe, country, state, city, returnSynopsis,
  } = shippingData;
  return (
    <div className="det-shipping-container">
      <div className="det-shipping-out-info">
        <TimeframeContainer timeframe={timeframe} />
        <ShipSourceContainer country={country} state={state} city={city} />
      </div>
      <ShippingFee shipType={shipType} freeShip={freeShip} />
      {!freeShip
        && <button type="button" className="det-shipping-cost-button">Get Shipping Cost</button>}
      {!!returnSynopsis
        && <div className="det-return-synopsis">{returnSynopsis}</div>}
    </div>
  );
}

ShippingContainer.propTypes = {
  shippingData: PropTypes.shape({
    shipType: PropTypes.string,
    freeShip: PropTypes.number,
    timeframe: PropTypes.string,
    country: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    returnSynopsis: PropTypes.string,
  }).isRequired,
};

export default ShippingContainer;

/*
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
| --shipping module - has dropdown for country (if int'l ship) --> not there for digital
| (return short blurb)
---
*/
