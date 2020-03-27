import React from 'react';

function PersonalizeContainer() {
  return (
    <div className="det-personalization-container">
      <div className="det-personalization-label">
        add your personalizaton:
      </div>
      <input type="text" className="det-personalization-input" name="personalization" />
    </div>
  );
}

export default PersonalizeContainer;

/*
Personalize Container
| ---
| | (personalization - includes text area)
| | personalization label
| | text area for pers.
| ---
*/
