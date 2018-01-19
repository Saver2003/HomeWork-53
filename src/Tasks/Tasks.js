import React from 'react';
import Task from '../Task/Task';


const Tasks = props => {
    return (
        <div className="Tasks" >
            
            {props.tasks.map((task) => {
                return <Task text={task.text} key={task.id} id={task.id} remove={props.remove}/>
            })}
        </div>
    )
};

export default Tasks;