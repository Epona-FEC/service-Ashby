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
// import ItemDetails from '../client/src/index.jsx';

describe('basic test of testing with jest', () => {
  test('truth sanity', () => {
    expect(true).toBe(true);
  });

  test('basic math sanity', () =>{
    expect(2 + 3).toBe(5);
  });
});

describe('Cost Components', () => {

  describe('MarkdownContainer', function() {
    const markdown = shallow(<MarkdownContainer />);

    test('node should exist', () => {
      expect(markdown.exists()).toBe(true);
    });
    test('should not have an unused class', () => {
      expect(markdown.exists('.blah')).toBe(false);
    });
    test('should have "markdown-container" class', () => {
      expect(markdown.exists('.markdown-container')).toBe(true);
    });
  });

  describe('CostContainer', () => {
    const cost = shallow(<CostContainer />);

    test('node should exist', () => {
      expect(cost.exists()).toBe(true);
    });
    test('should not have an unused class', () => {
      expect(cost.exists('.blah')).toBe(false);
    });
    test('should have "cost-container" class', () => {
      expect(cost.exists('.cost-container')).toBe(true);
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
    const styleFlags = shallow(<StyleFlagsContainer />);

    test('node should exist', () => {
      expect(styleFlags.exists()).toBe(true);
    });
    test('should have "style-flags-container" class', () => {
      expect(styleFlags.exists('.style-flags-container')).toBe(true);
    });
  });

  describe('MaterialsContainer', () => {
    const materials = shallow(<MaterialsContainer />);

    test('node should exist', () => {
      expect(materials.exists()).toBe(true);
    });
    test('should have "materials-container" class', () => {
      expect(materials.exists('.materials-container')).toBe(true);
    });
  });

  describe('DescriptionContainer', () => {
    const description = shallow(<DescriptionContainer />);

    test('node should exist', () => {
      expect(description.exists()).toBe(true);
    });
    test('should have "description-container" class', () => {
      expect(description.exists('.description-container')).toBe(true);
    });
  });

  describe('DetailsContainer', () => {
    const details = shallow(<DetailsContainer />);
    const children = details.children();

    test('node should exist', () => {
      expect(details.exists()).toBe(true);
    });
    test('should have "details-container" class', () => {
      expect(details.exists('.details-container')).toBe(true);
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
    const choices = shallow(<ChoicesContainer />);

    test('node should exist', () => {
      expect(choices.exists()).toBe(true);
    })
    test('should have "choices-container" class', () => {
      expect(choices.exists('.choices-container')).toBe(true);
    });
  });

  describe('PersonalizeContainer', () => {
    const personalize = shallow(<PersonalizeContainer />);

    test('node should exist', () => {
      expect(personalize.exists()).toBe(true);
    });
    test('should have "personalization" class', () => {
      expect(personalize.exists('.personalization')).toBe(true);
    });
  });

  describe('QuantityContainer', () => {
    const quantity = shallow(<QuantityContainer />);

    test('node should exist', () => {
      expect(quantity.exists()).toBe(true);
    });
    test('should have "quantity-container" class', () => {
      expect(quantity.exists('.quantity-container')).toBe(true);
    });
  });

  describe('SellingFlagsContainer', () => {
    const sellingFlags = shallow(<SellingFlagsContainer />);

    test('node should exist', () => {
      expect(sellingFlags.exists()).toBe(true);
    });
    test('should have "selling-flags-container" class', () => {
      expect(sellingFlags.exists('.selling-flags-container')).toBe(true);
    });
  });

  describe('OptionsContainer', () => {
    const options = shallow(<OptionsContainer />);
    const children = options.children();

    test('node should exist', () => {
      expect(options.exists()).toBe(true);
    });
    test('should have "options-container" class', () => {
      expect(options.exists('.options-container')).toBe(true);
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
  const policies = shallow(<PoliciesContainer />);
  test('node should exist', () => {
    expect(policies.exists()).toBe(true);
  });
  test('should have "policies-container" class', () => {
    expect(policies.exists('.policies-container')).toBe(true);
  });
});

describe('ShippingComponents', () => {

  describe('TimeframeContainer', () => {
    const timeframe = shallow(<TimeframeContainer />);

    test('node should exist', () => {
      expect(timeframe.exists()).toBe(true);
    });
    test('should have "timeframe-container" class', () => {
      expect(timeframe.exists('.timeframe-container')).toBe(true);
    })
  });

  describe('ShipSourceContainer', () => {
    const shipSource = shallow(<ShipSourceContainer />);

    test('node should exist', () => {
      expect(shipSource.exists()).toBe(true);
    });
    test('should have "ship-source-container" class', () => {
      expect(shipSource.exists('.ship-source-container')).toBe(true);
    })
  });

  describe('ShippingContainer', () => {
    const shipping = shallow(<ShippingContainer />);
    const children = shipping.children();

    test('node should exist', () => {
      expect(shipping.exists()).toBe(true);
    });
    test('should have "shipping-container" class', () => {
      expect(shipping.exists('.shipping-container')).toBe(true);
    })
    test('should have TimeframeContainer child', () => {
      expect(children.containsMatchingElement(<TimeframeContainer />)).toBe(true);
    });
    test('should have ShipSourceContainer child', () => {
      expect(children.containsMatchingElement(<ShipSourceContainer />)).toBe(true);
    });
  });
});


  // it('should mount in DOM'), function() {
  //   expect(mount(<ItemDetails />).find('#item-info').length).toBe(1);
  // };

  // it('should render to static html', function() {
  //   expect().
  // }

  // );
