import React from 'react';
import { shallow, mount, reader } from 'enzyme';
import MarkdownContainer from '../client/src/CostComponents/MarkdownContainer.jsx';
import CostContainer from '../client/src/CostComponents/CostContainer.jsx';
import StyleFlagsContainer from '../client/src/DetailsComponents/StyleFlagsContainer.jsx';
import MaterialsContainer from '../client/src/DetailsComponents/MaterialsContainer.jsx';
import DescriptionContainer from '../client/src/DetailsComponents/DescriptionContainer.jsx';
import DetailsContainer from '../client/src/DetailsComponents/DetailsContainer.jsx';
import ChoicesContainer from '../client/src/OptionComponents/ChoicesContainer.jsx';
import PersonalizeContainer from '../client/src/OptionComponents/PersonalizeContainer.jsx';
import QuantityContainer from '../client/src/OptionComponents/QuantityContainer.jsx';
import SellingFlagsContainer from '../client/src/OptionComponents/SellingFlagsContainer.jsx';
import OptionsContainer from '../client/src/OptionComponents/OptionsContainer.jsx';
import PoliciesContainer from '../client/src//PoliciesComponents/PoliciesContainer.jsx';
import ShippingContainer from '../client/src/ShippingComponents/ShippingContainer.jsx'
import TimeframeContainer from '../client/src/ShippingComponents/TimeframeContainer.jsx'
import ShipSourceContainer from '../client/src/ShippingComponents/ShipSourceContainer.jsx'
import ItemDetails from '../client/src/ItemDetails.jsx';

// describe('basic test of testing with jest', () => {
//   test('truth sanity', () => {
//     expect(true).toBe(true);
//   });

//   test('basic math sanity', () =>{
//     expect(2 + 3).toBe(5);
//   });
// });

describe('Cost Components', () => {

  describe('MarkdownContainer', function() {
    const markdown = shallow(<MarkdownContainer savings={''} ending={''} />);

    test('node should exist', () => {
      expect(markdown.exists()).toBe(true);
    });
    test('should not have an unused class', () => {
      expect(markdown.hasClass('blah')).toBe(false);
    });
    test('should have "markdown-container" class', () => {
      expect(markdown.hasClass('markdown-container')).toBe(true);
    });
  });

  describe('CostContainer', () => {
    const bestseller = 1;
    const price = 1;
    const discount = 1
    const endDate = '';
    const costData = { bestseller, price, discount, endDate };

    const cost = shallow(<CostContainer costData={costData} />);

    test('node should exist', () => {
      expect(cost.exists()).toBe(true);
    });
    test('should not have an unused class', () => {
      expect(cost.hasClass('blah')).toBe(false);
    });
    test('should have "cost-container" class', () => {
      expect(cost.hasClass('cost-container')).toBe(true);
    });
    test('should not have nonexistant child nodes', () => {
      expect(cost.children('Nonexistant')).toHaveLength(0);
    });
    test('should have one markdown container as a child', () => {
      expect(cost.children('MarkdownContainer')).toHaveLength(1);
    });
  });
});

describe ('details components', () => {

  describe('StyleFlagsContainer', () => {
    const styleFlags = shallow(<StyleFlagsContainer handmade={0} vintage={0} />);

    test('node should exist', () => {
      expect(styleFlags.exists()).toBe(true);
    });
    test('should have "style-flags-container" class', () => {
      expect(styleFlags.hasClass('style-flags-container')).toBe(true);
    });
  });

  describe('MaterialsContainer', () => {
    const materials = shallow(<MaterialsContainer materials={''} />);

    test('node should exist', () => {
      expect(materials.exists()).toBe(true);
    });
    test('should have "materials-container" class', () => {
      expect(materials.hasClass('materials-container')).toBe(true);
    });
  });

  describe('DescriptionContainer', () => {
    const description = shallow(<DescriptionContainer dimensions={''} description={''} />);

    test('node should exist', () => {
      expect(description.exists()).toBe(true);
    });
    test('should have "description-container" class', () => {
      expect(description.hasClass('description-container')).toBe(true);
    });
  });

  describe('DetailsContainer', () => {
    const handmade = 1;
    const vintage = 1;
    const materials = '';
    const dimensions = '';
    const description = '';
    const detailsData = { handmade, vintage, materials, dimensions, description };

    const details = shallow(<DetailsContainer detailsData={detailsData} />);
    const children = details.children();

    test('node should exist', () => {
      expect(details.exists()).toBe(true);
    });
    test('should have "details-container" class', () => {
      expect(details.hasClass('details-container')).toBe(true);
    });
    test('should have three children', () => {
      expect(children).toHaveLength(3);
    });
    test('should have StyleFlagsContainer child', () => {
      expect(children.containsMatchingElement(<StyleFlagsContainer />)).toBe(true);
    });
    test('should have MaterialsContainer child', () => {
      expect(children.containsMatchingElement(<MaterialsContainer />)).toBe(true);
    });
    test('should have DescriptionContainer child', () => {
      expect(children.containsMatchingElement(<DescriptionContainer />)).toBe(true);
    });
  })
});

describe('OptionsComponents', () => {

  describe('ChoicesContainer', () => {
    const title = '';
    const list = '';
    const choices = shallow(<ChoicesContainer title={title} list={list} />);

    test('node should exist', () => {
      expect(choices.exists()).toBe(true);
    })
    test('should have "choices-container" class', () => {
      expect(choices.hasClass('choices-container')).toBe(true);
    });
  });

  describe('PersonalizeContainer', () => {
    const personalize = shallow(<PersonalizeContainer />);

    test('node should exist', () => {
      expect(personalize.exists()).toBe(true);
    });
    test('should have "personalization-container" class', () => {
      expect(personalize.hasClass('personalization-container')).toBe(true);
    });
  });

  describe('QuantityContainer', () => {
    const maxOrderQty = 0;
    const quantity = shallow(<QuantityContainer maxOrderQty={maxOrderQty} />);

    test('node should exist', () => {
      expect(quantity.exists()).toBe(true);
    });
    test('should have "quantity-container" class', () => {
      expect(quantity.hasClass('quantity-container')).toBe(true);
    });
  });

  describe('SellingFlagsContainer', () => {
    const inventory = 1;
    const inOtherCarts = 1;
    const shipType = '';
    const freeShip = 1;
    const sellingFlags = shallow(<SellingFlagsContainer inventory={inventory}
      inOtherCarts={inOtherCarts}
      shipType={shipType}
      freeShip={freeShip} />);

    test('node should exist', () => {
      expect(sellingFlags.exists()).toBe(true);
    });
    test('should have "selling-flags-container" class', () => {
      expect(sellingFlags.hasClass('selling-flags-container')).toBe(true);
    });
  });

  describe('OptionsContainer', () => {
    const options = [{title: '', list:''}];
    const personalizable = 1;
    const maxOrderQty = 1;
    const inventoryCount = 1;
    const inOtherCarts = 1;
    const type = '';
    const free = 1;

    const optionsData = {
      options,
      personalizable,
      maxOrderQty,
      inventoryCount,
      inOtherCarts,
      type,
      free,
    };

    const optionsContainer = shallow(<OptionsContainer optionsData={optionsData} />);
    const children = optionsContainer.children();

    test('node should exist', () => {
      expect(optionsContainer.exists()).toBe(true);
    });
    test('should have "options-container" class', () => {
      expect(optionsContainer.hasClass('options-container')).toBe(true);
    });
    test('should have ChoicesContainer child', () => {
      expect(children.containsMatchingElement(<ChoicesContainer />)).toBe(true);
    });
    test('should have PersonalizeContainer child', () => {
      expect(children.containsMatchingElement(<PersonalizeContainer />)).toBe(true);
    });
    test('should have QuantityContainer child', () => {
      expect(children.containsMatchingElement(<QuantityContainer />)).toBe(true);
    });
    test('should have SellingFlagsContainer child', () => {
      expect(children.containsMatchingElement(<SellingFlagsContainer />)).toBe(true);
    });
  });
});

describe('PoliciesContainer', () => {
  const policiesData = '';
  const policies = shallow(<PoliciesContainer policiesData={policiesData} />);
  test('node should exist', () => {
    expect(policies.exists()).toBe(true);
  });
  test('should have "policies-container" class', () => {
    expect(policies.hasClass('policies-container')).toBe(true);
  });
});

describe('ShippingComponents', () => {

  describe('TimeframeContainer', () => {
    const timeframe = shallow(<TimeframeContainer />);

    test('node should exist', () => {
      expect(timeframe.exists()).toBe(true);
    });
    test('should have "timeframe-container" class', () => {
      expect(timeframe.hasClass('timeframe-container')).toBe(true);
    })
  });

  describe('ShipSourceContainer', () => {
    const shipSource = shallow(<ShipSourceContainer />);

    test('node should exist', () => {
      expect(shipSource.exists()).toBe(true);
    });
    test('should have "ship-source-container" class', () => {
      expect(shipSource.hasClass('ship-source-container')).toBe(true);
    })
  });

  describe('ShippingContainer', () => {
    const shipType = '';
    const freeShip = 1;
    const timeframe = '';
    const country = '';
    const state = '';
    const city = '';
    const returnSynopsis = '';

    const shippingData = {
      shipType, freeShip, timeframe, country, state, city, returnSynopsis
    };

    const shipping = shallow(<ShippingContainer shippingData={shippingData} />);
    const children = shipping.children();

    test('node should exist', () => {
      expect(shipping.exists()).toBe(true);
    });
    test('should have "shipping-container" class', () => {
      expect(shipping.hasClass('shipping-container')).toBe(true);
    })
    test('should have TimeframeContainer child', () => {
      expect(children.containsMatchingElement(<TimeframeContainer />)).toBe(true);
    });
    test('should have ShipSourceContainer child', () => {
      expect(children.containsMatchingElement(<ShipSourceContainer />)).toBe(true);
    });
  });
});

describe('ItemDetails overall container', () => {
  const costData = {};
  const optionsData = {};
  const detailsData = {};
  const shippingData = {};
  const policiesData = {};
  const itemDetails = shallow(<ItemDetails />);
  const children = itemDetails.children();

  test('node should exist', () => {
    expect(itemDetails.exists()).toBe(true);
  });

  test('should have "item-details" class', () => {
    expect(itemDetails.hasClass('item-details')).toBe(true);
  })

  test('should have an h1 item-name elements', () => {
    expect(itemDetails.find('h1').hasClass('item-name')).toBe(true);
  });

  test('should have CostContainer child', () => {
    expect(children.containsMatchingElement(<CostContainer costData={costData} />)).toBe(true);
  });

  test('should have OptionsContainer child', () => {
    expect(children.containsMatchingElement(<OptionsContainer optionsData={optionsData} />)).toBe(true);
  });

  test('should have DetailsContainer child', () => {
    expect(children.containsMatchingElement(<DetailsContainer detailsData={detailsData} />)).toBe(true);
  });

  test('should have ShippingContainer child', () => {
    expect(children.containsMatchingElement(<ShippingContainer shippingData={shippingData} />)).toBe(true);
  });

  test('should have PoliciesContainer child', () => {
    expect(children.containsMatchingElement(<PoliciesContainer policiesData={policiesData} />)).toBe(true);
  });
});

  // it('should mount in DOM'), function() {
  //   expect(mount(<ItemDetails />).find('#item-info').length).toBe(1);
  // };

  // it('should render to static html', function() {
  //   expect().
  // }

  // );
