import React from 'react';
import PropTypes from 'prop-types';

function StyleFlagsContainer({ handmade, vintage }) {
  return (
    <div className="det-style-flags-container">
      {!!handmade
        && (
        <div className="det-featue-image">
          <img src="http://localhost:3002/hand.png" alt="hourglass" className="det-selling-flag" />
          <div className="det-style-label">Handmade</div>
        </div>
        )}
      {!!vintage
        && (
        <div className="det-featue-image">
          <img src="http://localhost:3002/clock.png" alt="hourglass" className="det-selling-flag" />
          <div className="det-style-label">Vintage</div>
        </div>
        )}
    </div>
  );
}

StyleFlagsContainer.propTypes = {
  handmade: PropTypes.number,
  vintage: PropTypes.number,
};

StyleFlagsContainer.defaultProps = {
  handmade: null,
  vintage: null,
};

export default StyleFlagsContainer;

/*
| Style Flags Container
| ---
| | (handmade icon)
| | (vintage icon)
| ---
*/
