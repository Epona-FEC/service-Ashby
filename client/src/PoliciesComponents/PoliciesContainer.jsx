import React from 'react';
import PropTypes from 'prop-types';

function PoliciesContainer({ policiesData }) {
  const {
    policies, returnsCondition, giftWrap, faqs,
  } = policiesData;
  return (
    <div className="det-policies-container">
      {(policies !== '')
        && <button type="button" className="det-shop-policies-button">View shop policies</button>}
      {(returnsCondition !== '')
        && <button type="button" className="det-shop-terms-button">View sale terms and conditions</button>}
      {!!giftWrap
        && <div className="det-shop-giftwrap-label">Gift wrapping available</div>}
      {!!faqs
        && <button type="button" className="det-faq-button">(FAQs - button just like shipping)</button>}
    </div>
  );
}

PoliciesContainer.propTypes = {
  policiesData: PropTypes.shape({
    policies: PropTypes.string,
    returnsCondition: PropTypes.string,
    giftWrap: PropTypes.number,
    faqs: PropTypes.number,
  }).isRequired,
};

export default PoliciesContainer;

/*
Policies Container
---
| shop policies - button that pops up shop policies reader that lays on top of page
| (terms and conditions - works like shop policies)
| (Gift wrapping available , dashed underline - hover brings up blurb)
| (FAQs - button just like shipping)
---
*/
