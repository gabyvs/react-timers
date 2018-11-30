import React     from 'react';
import PropTypes from 'prop-types';
import TimerService from '../../services/timerService';
import './Timer.css';

class Timer extends React.Component {
  state = {
    isRunning: !!this.props.runningSince
  };

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  onClickComponent = () => {
    if (this.state.isRunning) {
      this.props.onTimerStop(this.props.id);
    } else {
      this.props.onTimerStart(this.props.id);
    }
    this.setState({
      isRunning: !this.state.isRunning
    });
  };

  onClickEdit = (e) => {
    e.preventDefault();
    this.props.onClickEdit();
  };

  render() {
    const elapsedStr = TimerService.renderElapsedString(this.props.elapsed, this.props.runningSince);
    const timerClass = this.state.isRunning ? 'timer running' : 'timer';

    return (
      <div
        className={timerClass}
        onClick={this.onClickComponent}>
        <div className="upper">
          <span>{elapsedStr}</span>
        </div>
        <div className="lower">
          <div className="title">{this.props.title}</div>
          <div className="project">{this.props.project}</div>
          {
            !this.state.isRunning &&
            <button
              className="more"
              onClick={this.onClickEdit}>
              <i className="fas fa-ellipsis-h more-icon"></i>
            </button>
          }
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  elapsed: PropTypes.number,
  runningSince: PropTypes.number,
  isRunning: PropTypes.bool,
  onClickEdit: PropTypes.func,
  onTimerStart: PropTypes.func,
  onTimerStop: PropTypes.func
};

export default Timer;