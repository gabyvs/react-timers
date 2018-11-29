import React     from 'react';
import PropTypes from 'prop-types';
import TimerService from '../../services/timerService';
import './Timer.css';

const Timer = (props) => {
  const elapsedStr = TimerService.renderElapsedString(props.elapsed);

  if (props.isRunning) {
    return (
      <div className="timer running">
        <div className="upper">
          <span>{elapsedStr}</span>
        </div>
        <div className="lower">
          <div className="title">{props.title}</div>
          <div className="project">{props.project}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="timer stopped">
      <div className="left">
        <div className="title">{props.title}</div>
        <div className="project">{props.project}</div>
        <div className="time">{elapsedStr}</div>
      </div>
      <div className="right">
        <button className="more">
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </div>
  );


};

Timer.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  runningSince: PropTypes.number,
  isRunning: PropTypes.bool
};

export default Timer;