import React     from 'react';
import PropTypes from 'prop-types';
import './Edit.css';

class Edit extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
              onChange={this.handleChange} />
          </div>
          <div className="row">
            <label>Project</label>
            <input
              type="text"
              name="project"
              value={this.state.project}
              onChange={this.handleChange}/>
          </div>
          <div className="row button-row">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">{btnText}</button>
          </div>
          {
            //title &&
            (
              <>
                <hr className="divider"/>
                <button className="reset-btn">Reset</button>
                <button className="delete-btn">Delete</button>
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
};

export default Edit;