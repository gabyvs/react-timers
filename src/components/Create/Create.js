import React from 'react';
import Edit from '../Edit/Edit';
import './Create.css';

class Create extends React.Component {
  state = {
    isActive: false
  };

  activateCreate = () => {
    this.setState({ isActive: true});
  };

  onClickSave = (timer) => {
    this.props.onClickSave(timer);
    this.setState({ isActive: false });
  };

  onClickCancel = () => {
    this.setState({ isActive: false });
  };

  render() {
    if (this.state.isActive) {
      return (
        <Edit
          {...this.props}
          onClickSave={this.onClickSave}
          onClickCancel={this.onClickCancel} />
      );
    } else {
      return (
        <div className="create">
          <button
            onClick={this.activateCreate}
            className="btn btn-primary create-button"
            type="button">
            <i className="fas fa-plus create-icon"></i>
          </button>
        </div>
      )
    }
  }
}

export default Create;