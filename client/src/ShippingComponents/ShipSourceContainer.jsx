import React from 'react';
import PropTypes from 'prop-types';

function ShipSourceContainer({ country }) {
  return (
    <div className="det-ship-source-container">
      <div className="det-ship-source-label">From</div>
      <div className="det-ship-source-location">{country}</div>
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
