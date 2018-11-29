import React     from 'react';
import PropTypes from 'prop-types';
import TimerService from '../../services/timerService';
import './Timer.css';

const Timer = (props) => {
  const elapsedStr = TimerService.renderElapsedString(props.elapsed);
  const timerClass = props.isRunning ? 'timer running' : 'timer';

  return (
    <div className={timerClass}>
      <div className="upper">
        <span>{elapsedStr}</span>
      </div>
      <div className="lower">
        <div className="title">{props.title}</div>
        <div className="project">{props.project}</div>
        {
          !props.isRunning &&
          <button className="more">
            <i className="fas fa-ellipsis-h more-icon"></i>
          </button>
        }
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