import React from 'react';
import Card from '../Card/Card';
import './List.css';

const List = () => (
  <div className="list">
    <fieldset>
      <legend>List</legend>
      <Card />
      <Card />
      <Card isEditing={true} />
    </fieldset>
  </div>
);

export default List;