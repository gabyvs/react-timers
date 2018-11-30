import React from 'react';
import uuid from 'uuid';
import Card from '../Card/Card';
import Create from '../Create/Create';
import './List.css';

class List extends React.Component {
  state = {
    timers: [
      {
        title: 'Study react',
        project: 'Technologies',
        id: uuid.v4(),
        elapsed: 8986300,
        runningSince: Date.now(),
      }, {
        title: 'Study French',
        project: 'Languages',
        id: uuid.v4(),
        elapsed: 3890985,
        runningSince: null,
      }
    ]
  };

  render() {
    const timers = this.state.timers.map(timer => (
      <Card
        key={timer.id}
        {...timer} />
    ));

    return (
      <div className="list">
        <Create />
        { timers }
      </div>
    );
  }
}

export default List;