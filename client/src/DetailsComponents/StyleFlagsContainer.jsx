import React from 'react';
import PropTypes from 'prop-types';

function StyleFlagsContainer({ handmade, vintage }) {
  return (
    <div className="style-flags-container">
      {!!handmade
        && <div className="handmade-flag">Handmade</div>}
      {!!vintage
        && <div className="vintage-flag">Vintage</div>}
    </div>
  );
}

StyleFlagsContainer.propTypes = {
  handmade: PropTypes.number.isRequired,
  vintage: PropTypes.number.isRequired,
};

export default StyleFlagsContainer;

/*
| Style Flags Container
| ---
| | (handmade icon)
| | (vintage icon)
| ---
*/
