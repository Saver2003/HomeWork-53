import React, {Component} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Tasks from './Tasks/Tasks';

class App extends Component {
    state = {
        tasks: [
            {text: 'Buy milk', id: 1},
            {text: 'Walk with dog', id: 2}
        ],
        textInput: ''
    };
    
    changeText = (event) => {
        this.setState({textInput: event.target.value});
    };
    
    addTask = () => {
        if (this.state.textInput === '') {
            return
        } else {
            
            const newTask = {text: this.state.textInput, id: Date.now()};
            const tasks = [...this.state.tasks];
            tasks.push(newTask);
            
            this.setState({tasks: tasks});
        }
    };
    
    removeTask = (id) => {
        const index = this.state.tasks.findIndex(img => img.id === id);
        const task = [...this.state.tasks];
        task.splice(index, 1);
        
        this.setState({tasks: task})
    };
    
    render() {
        return (
            <div className="App">
                <AddTaskForm click={this.addTask} onChange={this.changeText}/>
                <Tasks tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}

export default App;
