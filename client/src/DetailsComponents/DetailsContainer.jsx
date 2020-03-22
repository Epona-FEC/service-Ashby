import React from 'react';
import StyleFlagsContainer from './StyleFlagsContainer';
import MaterialsContainer from './MaterialsContainer';
import DescriptionContainer from './DescriptionContainer';

function DetailsContainer() {
  return (
    <div className="details-container">
      <StyleFlagsContainer />
      <MaterialsContainer />
      <DescriptionContainer />
    </div>
  );
}

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
