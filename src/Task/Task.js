import React from 'react';
import './Task.css';
import trash from '../Pic/trash.png';

const Task = props => {
    return (
        <div className="Task">{props.text}
            <img src={trash} alt="" onClick={() => props.remove(props.id)} />
        </div>
    )
};

export default Task;