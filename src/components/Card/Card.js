import React from 'react';
import PropTypes from 'prop-types';
import Timer from '../Timer/Timer';
import Edit from '../Edit/Edit';

// TODO: do I need card?
const Card = (props) => (
  props.isEditing ?
    <Edit
      {...props} /> :
    <Timer
      {...props} />
);

Card.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  runningSince: PropTypes.number,
  isEditing: PropTypes.bool
};

export default Card;