import React from 'react';
import PropTypes from 'prop-types';

// took out using 'ending' for brevity
// ideally would calculate how much time is left until then & display that
function MarkdownContainer({ savings, ending }) {
  return (
    <div className="det-markdown-container">
      <div className="det-markdown-savings">
        You save $
        {savings}
      </div>
      {!!ending
        && (
          <div className="det-markdown-sale-ending">
            Sale ends in 12 hours
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
