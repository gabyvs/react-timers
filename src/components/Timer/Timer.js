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

  onClickComponent = (e) => {
    // Using e.preventDefault was not working.
    let willEdit = e.target.name === 'more';
    if (willEdit) return;
    if (this.state.isRunning) {
      this.props.onTimerStop(this.props.id);
    } else if (!willEdit) {
      this.props.onTimerStart(this.props.id);
    }
    this.setState({
      isRunning: !this.state.isRunning
    });
  };

  onClickEdit = () => {
    this.props.onClickEdit();
  };

  render() {
    const elapsedStr = TimerService.renderElapsedString(this.props.elapsed, this.props.runningSince);
    const timerClass = this.state.isRunning ? 'timer running' : 'timer';
    const title = this.props.title ?
      <div className="title">{this.props.title}</div> :
      <div className="empty">(no title)</div>;
    const project = this.props.project ?
      <div className="project">{this.props.project}</div> :
      <div className="empty">(no project)</div>;


    return (
      <div
        className={timerClass}
        onClick={this.onClickComponent}>
        {
          !this.state.isRunning &&
          <button
            className="more"
            name="more"
            onClick={this.onClickEdit}>
            <i className="fas fa-ellipsis-h more-icon"></i>
          </button>
        }
        <div className="upper">
          <span>{elapsedStr}</span>
        </div>
        <div className="lower">
          {title}
          {project}
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  runningSince: PropTypes.number,
  isRunning: PropTypes.bool,
  onClickEdit: PropTypes.func.isRequired,
  onTimerStart: PropTypes.func.isRequired,
  onTimerStop: PropTypes.func.isRequired
};

export default Timer;