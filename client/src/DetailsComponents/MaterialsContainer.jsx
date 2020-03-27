import React from 'react';
import PropTypes from 'prop-types';

function MaterialsContainer({ materials }) {
  return (
    <div className="det-materials-container">
      <div className="det-materials-label">Materials</div>
      <div className="det-materials-list">{materials}</div>
    </div>
  );
}

MaterialsContainer.propTypes = {
  materials: PropTypes.string,
};

MaterialsContainer.defaultProps = {
  materials: '',
};

export default MaterialsContainer;

/*
| Materials Container
| ---
| | !material(s) - mini header and large text (if several,
| |           does a "more" underlined that shows the rest)
| | materials header
| | ---
| | | materials list - limit display to one line w/ a click to expand
| | ---
| ---
*/
