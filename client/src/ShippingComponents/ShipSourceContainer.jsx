import React from 'react';
import PropTypes from 'prop-types';

function ShipSourceContainer({ country }) {
  return (
    <div className="ship-source-container">
      <div className="ship-source-label">From</div>
      <div className="ship-source-location">{country}</div>
    </div>
  );
}

ShipSourceContainer.propTypes = {
  country: PropTypes.string.isRequired,
};

export default ShipSourceContainer;

/*
Ship Source Container
---
| "From"
| country/state/city
---
*/
