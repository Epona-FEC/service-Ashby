import React from 'react';
import PropTypes from 'prop-types';

function ChoicesContainer({ title, list }) {
  const listItems = list.split(',');
  console.log(listItems);
  return (
    <div className="choices-container">
      {/* <div>(option title) ,-- there may be 0 to 3 of option title/dropdowns</div> */}
      <label htmlFor={title} className="option-title">{title}</label>
      <select id={title}>
        {listItems.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}

ChoicesContainer.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
  // option: PropTypes.shape({
  //   title: PropTypes.string,
  //   list: PropTypes.string,
  // }).isRequired,
};

export default ChoicesContainer;

/*
| Choices Container
| ---
| | (options, may be more than one - in dropdowns)
| | title of option
| | dropdown - populate with option list
| ---
*/
