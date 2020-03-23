import React from 'react';
import PropTypes from 'prop-types';


function MarkdownContainer({ savings, ending }) {
  return (
    <div className="markdown-container">
      <div>
        savings: $
        {savings}
      </div>
      <div>
        sale ending:
        {ending}
      </div>
    </div>
  );
}

MarkdownContainer.propTypes = {
  savings: PropTypes.number.isRequired,
  ending: PropTypes.string.isRequired,
};

export default MarkdownContainer;

/*
Markdown Container
| ---
| |(savings)
| |(sales ending tag - time remaining)
| ---
*/
