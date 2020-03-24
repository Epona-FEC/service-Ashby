import React from 'react';

function PersonalizeContainer() {
  return (
    <div className="personalization-container">
      <label htmlFor="personalization" className="personalization-label">
        Personalizaton:
        <input type="text" id="personalization" name="personalization" />
      </label>
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
