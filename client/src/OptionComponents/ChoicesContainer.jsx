import React from 'react';
import PropTypes from 'prop-types';

function ChoicesContainer({ title, list }) {
  const listItems = list.split(',');
  return (
    <div className="choices-container">
      <label htmlFor={title} className="choice-title">{title}</label>
      <select className="choice-dropdown" id={title}>
        {listItems.map((item) => (
          <option className="choice-item" key={item} value={item}>
            &nbsp;&nbsp;
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

ChoicesContainer.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
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
