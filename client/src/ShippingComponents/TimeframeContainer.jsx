import React from 'react';
import PropTypes from 'prop-types';

function TimeframeContainer({ timeframe }) {
  return (
    <div className="det-timeframe-container">
      <div className="det-timeframe-label">Ready to Ship in</div>
      <div className="det-timeframe-info">{timeframe}</div>
    </div>
  );
}

TimeframeContainer.propTypes = {
  timeframe: PropTypes.string,
};

TimeframeContainer.defaultProps = {
  timeframe: '',
};

export default TimeframeContainer;

/*
| Timeframe Container
| ---
| | "Ready to ship in"
| | timeframe
| ---
*/
