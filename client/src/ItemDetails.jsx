import React from 'react';
import CostContainer from './CostComponents/CostContainer';
import OptionsContainer from './OptionComponents/OptionsContainer';
import DetailsContainer from './DetailsComponents/DetailsContainer';
import ShippingContainer from './ShippingComponents/ShippingContainer';
import PoliciesContainer from './PoliciesComponents/PoliciesContainer';

// class ItemDetails extends React.Component {
//   constructor () {
//     super ();

function ItemDetails() {
  // render() {
  return (
    <div className="item-details">
      <h1 className="item-name">item name goes here</h1>
      <CostContainer />
      <OptionsContainer />
      <DetailsContainer />
      <ShippingContainer />
      <PoliciesContainer />
    </div>
  );
  // };
}

export default ItemDetails;
