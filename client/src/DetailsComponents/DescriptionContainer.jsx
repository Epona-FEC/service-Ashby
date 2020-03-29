import React from 'react';
import PropTypes from 'prop-types';

class DescriptionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Learn more about this item',
      compressed: true,
    };
    this.toggleSize = this.toggleSize.bind(this);
  }

  toggleSize() {
    const { btnText, compressed } = this.state;
    console.log('current button', btnText, compressed);

    const newCompressed = !compressed;
    let newBtnText;
    if (newCompressed) {
      newBtnText = 'Learn more about this item';
    } else {
      newBtnText = 'Less';
    }
    console.log('sending to set state', newBtnText, newCompressed);

    this.setState({
      btnText: newBtnText,
      compressed: newCompressed,
    });
  }

  render() {
    const { dimensions, description } = this.props;
    const { btnText, compressed } = this.state;
    return (
      <div className="det-description-container">
        {!!dimensions
          && <div className="det-description-label">Dimensions</div>}
        {!!dimensions
        && <div className="det-dimensions-list">{dimensions}</div>}
        <div className="det-description-label">Description</div>
        <div className={compressed ? 'det-min-size' : 'det-full-size'}>
          <div className="det-description-body">{description}</div>
        </div>
        <div className="det-description-btn-container">
          <button type="button" className="det-description-button" onClick={this.toggleSize}>{btnText}</button>
        </div>
      </div>
    );
  }
}

DescriptionContainer.propTypes = {
  dimensions: PropTypes.string,
  description: PropTypes.string,
};

DescriptionContainer.defaultProps = {
  dimensions: null,
  description: '',
};

export default DescriptionContainer;

/*
| Description Container
| ---
| | (dimensions -  mini header and larg text)
| | !description - mini header with a bit larger text,
| |           has "Learn more about this item button" to show the rest
| | description header
| | actual description - limit display size
| | button - opens rest of description
| ---
*/
