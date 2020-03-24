import React from 'react';
import PropTypes from 'prop-types';

function TimeframeContainer({ timeframe }) {
  return (
    <div className="timeframe-container">
      <div className="timeframe-label">Ready to Ship in</div>
      <div>{timeframe}</div>
    </div>
  );
}

TimeframeContainer.propTypes = {
  timeframe: PropTypes.string.isRequired,
};

export default TimeframeContainer;

/*
| Timeframe Container
| ---
| | "Ready to ship in"
| | timeframe
| ---
*/
