import React from 'react';
import PropTypes from 'prop-types';

function DescriptionContainer({ dimensions, description }) {
  return (
    <div className="det-description-container">
      {!!dimensions
        && <div className="det-dimensions-label">Dimensions</div>}
      {!!dimensions
      && <div className="det-dimensions-list">{dimensions}</div>}
      <div className="det-description-label">Description</div>
      <div className="det-description-body">{description}</div>
      <div>Button/Link that opens up the rest of the description</div>
    </div>
  );
}

DescriptionContainer.propTypes = {
  dimensions: PropTypes.string,
  description: PropTypes.string.isRequired,
};

DescriptionContainer.defaultProps = {
  dimensions: null,
};

export default DescriptionContainer;

/*
| Description Container
| ---
| | (dimensions -  mini header and larg text)
| | !description - mini header with a bit larger text,
| |           has "Learn more about this item button" to show the rest
| | description header
| | actual description - limit display size
| | button - opens rest of description
| ---
*/
