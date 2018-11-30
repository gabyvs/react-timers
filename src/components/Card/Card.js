import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer';
import Edit from '../Edit/Edit';

class Card extends React.Component {
  state = {
    isEditing: false
  };

  render() {
    return this.state.isEditing ?
      <Edit
        {...this.props} /> :
      <Timer
        {...this.props} />
  }
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  runningSince: PropTypes.number
};

export default Card;