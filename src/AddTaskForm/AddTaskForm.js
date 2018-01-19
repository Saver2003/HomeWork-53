import React from 'react';
import './AddTaskForm.css'

const AddTaskForm = props => {
    return (
        <div className="AddTaskForm">
            <p><input className="AddTaskInput" type="text" value={props.text} onChange={props.onChange}
                      placeholder="Add Task"/></p>
            <button className="btn" onClick={props.click}>Add task</button>
        </div>
    );
};

export default AddTaskForm;