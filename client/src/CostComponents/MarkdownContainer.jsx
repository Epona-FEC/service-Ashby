import React from 'react';
import PropTypes from 'prop-types';


function MarkdownContainer({ savings, ending }) {
  return (
    <div className="markdown-container">
      <div className="savings">
        savings: $
        {savings}
      </div>
      {!!ending
        && (
          <div className="sale-ending">
            sale ending:
            {ending}
          </div>
        )}

    </div>
  );
}

MarkdownContainer.propTypes = {
  savings: PropTypes.string.isRequired,
  ending: PropTypes.string,
};

MarkdownContainer.defaultProps = {
  ending: null,
};

export default MarkdownContainer;

/*
Markdown Container
| ---
| |(savings)
| |(sales ending tag - time remaining)
| ---
*/
