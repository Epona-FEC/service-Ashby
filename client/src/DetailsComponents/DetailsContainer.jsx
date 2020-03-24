import React from 'react';
import PropTypes from 'prop-types';
import StyleFlagsContainer from './StyleFlagsContainer';
import MaterialsContainer from './MaterialsContainer';
import DescriptionContainer from './DescriptionContainer';

function DetailsContainer({ detailsData }) {
  const {
    handmade, vintage, materials, dimensions, description,
  } = detailsData;
  return (
    <div className="details-container">
      {(!!handmade || !!vintage)
        && <StyleFlagsContainer handmade={handmade} vintage={vintage} />}
      <MaterialsContainer materials={materials} />
      <DescriptionContainer dimensions={dimensions} description={description} />
    </div>
  );
}

DetailsContainer.propTypes = {
  detailsData: PropTypes.shape({
    handmade: PropTypes.number,
    vintage: PropTypes.number,
    materials: PropTypes.string,
    dimensions: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default DetailsContainer;

/*
Details Container
---
| Style Flags Container
| ---
| | (handmade icon)
| | (vintage icon)
| ---
|
| Materials Container
| ---
| | !material(s) - mini header and large text (if several,
| |       does a "more" underlined that shows the rest)
| | materials header
| | ---
| | | materials list - limit display to one line w/ a click to expand
| | ---
| ---
|
| Description Container
| ---
| | (dimensions -  mini header and larg text)
| | !description - mini header with a bit larger text,
| |       has "Learn more about this item button" to show the rest
| | description header
| | actual description - limit display size
| | button - opens rest of description
| ---
---
*/
