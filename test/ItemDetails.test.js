import React from 'react';
import { shallow, mount, reader } from 'enzyme';
import MarkdownContainer from '../client/src/CostComponents/MarkdownContainer.jsx';
import CostContainer from '../client/src/CostComponents/CostContainer.jsx';
// import ItemDetails from '../client/src/index.jsx';

describe('basic test of testing with jest', () => {
  test('truth sanity', () => {
    expect(true).toBe(true);
  });

  test('basic math sanity', () =>{
    expect(2 + 3).toBe(5);
  });
});

describe('markdown container', function() {
  const markdown = shallow(<MarkdownContainer />);

  test('node should exist', () => {
    expect(markdown.exists());
  });
  test('should not have an unused class', () => {
    expect(markdown.exists('.blah')).toBe(false);
  });
  test('should have "markdown-container" class', () => {
    expect(markdown.exists('.markdown-container')).toBe(true);
  });
});

describe('cost container', function() {
  const markdown = shallow(<CostContainer />);

  test('node should exist', () => {
    expect(markdown.exists());
  });
  test('should not have an unused class', () => {
    expect(markdown.exists('.blah')).toBe(false);
  });
  test('should have "cost-container" class', () => {
    expect(markdown.exists('.cost-container')).toBe(true);
  });
  test('should have a markdown container as a child', () => {
    expect(markdown.exists('MarkdownContainer')).toBe(true);
  });
});

  // it('should mount in DOM'), function() {
  //   expect(mount(<ItemDetails />).find('#item-info').length).toBe(1);
  // };

  // it('should render to static html', function() {
  //   expect().
  // }

  // );
