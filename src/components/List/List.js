import React from 'react';
import Card from '../Card/Card';
import Create from '../Create/Create';
import './List.css';

const List = () => (
  <div className="list">
    <Create isActive={false}/>
    <Card
      title="Study react"
      project="Technologies"
      elapsed={8986300} />
    <Card
      title="Study French"
      project="Languages"
      elapsed={3890985}
      isRunning={true} />
    <Card isEditing={true} />
  </div>
);

export default List;