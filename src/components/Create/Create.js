import React from 'react';
import PropTypes from 'prop-types';
import Edit from '../Edit/Edit';
import './Create.css';

const Create = (props) => {
  if (props.isActive) {
    return (
      <Edit />
    );
  } else {
    return (
      <div className="create">
        <button className="btn btn-primary create-button" type="button">
          <i className="fas fa-plus create-icon"></i>
        </button>
      </div>
    )
  }
};

Create.propTypes = {
  isActive: PropTypes.bool
};

export default Create;