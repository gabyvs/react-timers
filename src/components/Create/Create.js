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

  render() {
    if (this.state.isActive) {
      return (
        <Edit />
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