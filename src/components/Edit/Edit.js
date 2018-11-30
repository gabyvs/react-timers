import React     from 'react';
import PropTypes from 'prop-types';
import './Edit.css';

class Edit extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onClickSave = () => {
    this.props.onClickSave({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };

  onClickDelete = () => {
    this.props.onClickDelete(this.props.id);
  };

  onClickReset = () => {
    this.props.onClickReset(this.props.id);
  };

  render() {
    const btnText = this.props.title ? 'Update' : 'Create';
    return (
      <div className="edit">
        <fieldset>
          <div className="row">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange} />
          </div>
          <div className="row">
            <label>Project</label>
            <input
              type="text"
              name="project"
              value={this.state.project}
              onChange={this.onChange}/>
          </div>
          <div className="row button-row">
            <button
              className="cancel-btn"
              onClick={this.props.onClickCancel}>Cancel</button>
            <button
              className="save-btn"
              onClick={this.onClickSave}>{btnText}</button>
          </div>
          {
            this.props.title &&
            (
              <>
                <hr className="divider"/>
                <button
                  className="reset-btn"
                  onClick={this.onClickReset}>Reset</button>
                <button
                  className="delete-btn"
                  onClick={this.onClickDelete}>Delete</button>
              </>
            )
          }
        </fieldset>
      </div>
    );
  }
}

Edit.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickSave: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickReset: PropTypes.func
};

export default Edit;