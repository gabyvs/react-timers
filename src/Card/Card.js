import React from 'react';
import './Card.css';
import Timer from '../Timer/Timer';
import Edit from '../Edit/Edit';

const Card = (props) => {
  let child = props.isEditing ? <Edit /> : <Timer/>;

  return (
    <div className="card">
      <fieldset>
        <legend>Card</legend>
        {child}
      </fieldset>
    </div>
  );
};

export default Card;