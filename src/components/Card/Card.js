import React from 'react';
import Timer from '../Timer/Timer';
import Edit from '../Edit/Edit';

class Card extends React.Component {
  state = {
    isEditing: false
  };

  onClickSave = (timer) => {
    this.props.onClickSave(timer);
    this.setState({ isEditing: false });
  };

  onClickCancel = () => {
    this.setState({ isEditing: false });
  };

  onClickEdit = () => {
    this.setState({ isEditing: true });
  };

  onClickDelete = (timerId) => {
    this.props.onClickDelete(timerId);
    this.setState({ isEditing: false });
  };

  onClickReset = (timerId) => {
    this.props.onClickReset(timerId);
    this.setState({ isEditing: false });
  };

  render() {
    return this.state.isEditing ?
      <Edit
        {...this.props}
        onClickSave={this.onClickSave}
        onClickCancel={this.onClickCancel}
        onClickDelete={this.onClickDelete}
        onClickReset={this.onClickReset}/> :
      <Timer
        {...this.props}
        onClickEdit={this.onClickEdit} />
  }
}

export default Card;