import React from 'react';
import PropTypes from 'prop-types';
import TimeframeContainer from './TimeframeContainer';
import ShipSourceContainer from './ShipSourceContainer';

function ShippingFee({ shipType, freeShip }) {
  if (shipType === 'digital') {
    return null;
  }
  if (freeShip) {
    return <div className="shipping-fee">Free Shipping</div>;
  }
  return <div className="shipping-fee">$6.99</div>;
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
    <div className="shipping-container">
      <TimeframeContainer />
      <ShipSourceContainer />
      <ShippingFee shipType={shipType} freeShip={freeShip} />
      <button type="button" className="shipping-cost-button">Get Shipping Cost</button>
      {!!returnSynopsis
        && <div className="return-synopsis">{returnSynopsis}</div>}
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
