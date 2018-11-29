import React     from 'react';
import PropTypes from 'prop-types';
import './Edit.css';

const Edit = ({title, project}) => {
  const btnText = title ? 'Update' : 'Create';
  return (
    <div className="edit">
      <fieldset>
        <div className="row">
          <label>Title</label>
          <input type="text" defaultValue={title}/>
        </div>
        <div className="row">
          <label>Project</label>
          <input type="text" defaultValue={project}/>
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
};

Edit.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string,
};

export default Edit;