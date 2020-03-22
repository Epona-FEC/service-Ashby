import React from 'react';
import axios from 'axios';
import CostContainer from './CostComponents/CostContainer';
import OptionsContainer from './OptionComponents/OptionsContainer';
import DetailsContainer from './DetailsComponents/DetailsContainer';
import ShippingContainer from './ShippingComponents/ShippingContainer';
import PoliciesContainer from './PoliciesComponents/PoliciesContainer';

function getItem(callback) {
  return axios.get('/item/3')
    .then((response) => {
      console.log('data fetched');
      callback(null, response);
    })
    .catch((error) => {
      callback(error);
    });
}

class ItemDetails extends React.Component {
  // constructor() {
  //   super();
  // };
  componentDidMount() {
    getItem((err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    });
  }

  // function ItemDetails() {
  render() {
    // getItem();
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
  }
}

export default ItemDetails;

/*
response: {
  data: {
    itemDetails: [{
      id,
      title,
      price,
      shipping_id,
      materials,
      description,
      locations_id,
      policies,
      return_synopsis,
      dimensions,
      max_order_qty,
      returns_condition,
      inventory_count,
      in_other_carts,
      gift_wrap,
      faqs,
      bestseller,
      personalizable,
      handmade,
      vintage,
      country,
      state,
      city,
      type,   --last three refer to shipping
      free,
      timeframe

    }],
    itemOptions: [   --> this can have 0 to three entries, each an object with following shape
      {
        title,
        list
      }
    ],
    markdowns: [{
      discount,
      end_date
    }]
  }
}

*/
