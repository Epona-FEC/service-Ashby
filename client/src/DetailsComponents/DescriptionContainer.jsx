import React from 'react';
// import PropTypes from 'prop-types';

function DescriptionContainer() {
  return (
    <div className="description-container">
      <div>(dimensions header)</div>
      <div>(dimensions dropdown)</div>
      <div>Description</div>
      <div>description body -  limited</div>
      <div>button that opens up the rest of the description</div>
    </div>
  );
}

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
