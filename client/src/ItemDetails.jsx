import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CostContainer from './CostComponents/CostContainer';
import OptionsContainer from './OptionComponents/OptionsContainer';
import DetailsContainer from './DetailsComponents/DetailsContainer';
import ShippingContainer from './ShippingComponents/ShippingContainer';
import PoliciesContainer from './PoliciesComponents/PoliciesContainer';

const serviceURL = 'http://localhost:3002';

function getItem(itemId, callback) {
  return axios.get(`${serviceURL}/item/${itemId}`)
    .then((response) => {
      callback(null, response);
    })
    .catch((error) => {
      callback(error);
    });
}
// 24 has most optionals

function getCostData(data) {
  const itemDetails = data.itemDetails[0];
  const markdowns = data.markdowns[0];
  let discount;
  let endDate;
  if (!markdowns) {
    discount = 0;
    endDate = '';
  } else {
    discount = markdowns.discount;
    endDate = markdowns.end_date;
  }
  const { id } = itemDetails;
  const { bestseller } = itemDetails;
  const { price } = itemDetails;
  const result = {
    id, bestseller, price, discount, endDate,
  };
  return result;
}

function getDetailsData(data) {
  const itemDetails = data.itemDetails[0];
  const { id } = itemDetails;
  const { handmade } = itemDetails;
  const { vintage } = itemDetails;
  const { materials } = itemDetails;
  const { dimensions } = itemDetails;
  const { description } = itemDetails;
  const result = {
    id, handmade, vintage, materials, dimensions, description,
  };
  return result;
}

function getOptionsData(data) {
  const itemDetails = data.itemDetails[0];
  const { id } = itemDetails;
  const options = data.itemOptions;
  const { personalizable } = itemDetails;
  const maxOrderQty = itemDetails.max_order_qty;
  const inventoryCount = itemDetails.inventory_count;
  const inOtherCarts = itemDetails.in_other_carts;
  const { type } = itemDetails;
  const { free } = itemDetails;
  const result = {
    id, options, personalizable, maxOrderQty, inventoryCount, inOtherCarts, type, free,
  };
  return result;
}

function getPoliciesData(data) {
  const itemDetails = data.itemDetails[0];
  const { id } = itemDetails;
  const { policies } = itemDetails;
  const returnsCondition = itemDetails.returns_condition;
  const giftWrap = itemDetails.gift_wrap;
  const { faqs } = itemDetails;
  const result = {
    id, policies, returnsCondition, giftWrap, faqs,
  };
  return result;
}

function getShippingData(data) {
  const itemDetails = data.itemDetails[0];
  const { id } = itemDetails;
  const shipType = itemDetails.type;
  const freeShip = itemDetails.free;
  const { timeframe } = itemDetails;
  const { country } = itemDetails;
  const { state } = itemDetails;
  const { city } = itemDetails;
  const returnSynopsis = itemDetails.return_synopsis;
  const result = {
    id, shipType, freeShip, timeframe, country, state, city, returnSynopsis,
  };
  return result;
}

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    const { productId } = this.props;
    this.state = {
      id: productId,
      title: '',
      cost: {},
      options: {},
      details: {},
      policies: {},
      shipping: {},
    };
  }

  componentDidMount() {
    const { id } = this.state;
    getItem(id, (err, { data }) => {
      if (err) {
        console.error(err);
      } else {
        this.updateItem(data);
      }
    });
  }

  updateItem(data) {
    const { title } = data.itemDetails[0];
    const costData = getCostData(data);
    const optionsData = getOptionsData(data);
    const detailsData = getDetailsData(data);
    const shippingData = getShippingData(data);
    const policiesData = getPoliciesData(data);
    this.setState({
      title,
      cost: costData,
      options: optionsData,
      details: detailsData,
      shipping: shippingData,
      policies: policiesData,
    });
  }

  // function ItemDetails() {
  render() {
    const {
      title, cost, options, details, shipping, policies,
    } = this.state;
    return (
      <div className="item-details-container">
        <h1 className="item-name">{title}</h1>
        <CostContainer costData={cost} />
        <OptionsContainer optionsData={options} />
        <DetailsContainer detailsData={details} />
        <ShippingContainer shippingData={shipping} />
        <PoliciesContainer policiesData={policies} />
      </div>
    );
  }
}

ItemDetails.propTypes = {
  productId: PropTypes.number,
};

ItemDetails.defaultProps = {
  productId: 1,
};

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
