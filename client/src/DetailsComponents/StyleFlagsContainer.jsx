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
