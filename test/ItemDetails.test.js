import React from 'react';
import { shallow, mount, reader } from 'enzyme';
import MarkdownContainer from '../client/src/CostComponents/MarkdownContainer.jsx';
// import ItemDetails from '../client/src/index.jsx';

describe('basic test of testing with jest', () => {
  test('truth sanity', () => {
    expect(true).toBe(true);
  });

  test('basic math sanity', () =>{
    expect(2 + 3).toBe(5);
  });
});

// describe('markdown container', function() {
  // test('should have class"markdown"', () => {
  //   const markdownContainer = shallow(<MarkdownContainer />);

  //   expect(markdownContainer.contains(<div className="markdown" />)).to.equal(true);
  // })

  // it('should mount in DOM'), function() {
  //   expect(mount(<ItemDetails />).find('#item-info').length).toBe(1);
  // };

  // it('should render to static html', function() {
  //   expect().
  // }

  // );

// });