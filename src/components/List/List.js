import React from 'react';
import uuid from 'uuid';
import Card from '../Card/Card';
import Create from '../Create/Create';
import TimerService from '../../services/timerService';
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

  createTimer = timer => {
    const newTimer = TimerService.newTimer(timer);
    this.setState({
      timers: [newTimer].concat(this.state.timers)
    });
  };

  updateTimer = ({ id, title, project}) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === id) {
          return Object.assign({}, timer, {
            title: title,
            project: project
          });
        }
        return timer;
      })
    })
  };

  deleteTimer = timerId => {
    this.setState({
      timers: this.state.timers.filter(timer => timer.id !== timerId)
    });
  };

  resetTimer = timerId => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            elapsed: 0
          });
        }
        return timer;
      })
    })
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now
          });
        }
        return timer;
      })
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null
          });
        }
        return timer;
      })
    });
  };

  render() {
    const timers = this.state.timers.map(timer => (
      <Card
        key={timer.id}
        {...timer}
        onClickSave={this.updateTimer}
        onClickDelete={this.deleteTimer}
        onClickReset={this.resetTimer}
        onTimerStart={this.startTimer}
        onTimerStop={this.stopTimer}/>
    ));

    return (
      <div className="list">
        <Create onClickSave={this.createTimer}/>
        { timers }
      </div>
    );
  }
}

export default List;