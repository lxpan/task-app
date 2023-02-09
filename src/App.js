import React from 'react';
import './App.css';
import Overview from './components/Overview';
import update from 'immutability-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      tasksArray: [],
      taskCounter: 1,  // list ordinals start at 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const newTask = {
      id: this.state.taskCounter,
      text: this.state.inputText,
      edit: false
    };
    
    // update tasksArray with new task from input
    this.setState({
      tasksArray: [...this.state.tasksArray, newTask]
    });
    
    // increment task counter
    let newIndex = this.state.taskCounter + 1;
    this.setState({taskCounter: newIndex});

    // clear input after submit
    e.target.reset();
  }

  handleDelete(taskID) {
    this.setState({
      tasksArray: this.state.tasksArray.filter(task => task.id !== taskID)
    });
  }

  toggleEdit(taskID) {
    const selectedTask = this.state.tasksArray.filter(task => task.id === taskID);
    this.setState({
      tasksArray: this.state.tasksArray.filter(task => task.id !== taskID)
    });

    this.setState({
      tasksArray: [...this.state.tasksArray, selectedTask]
    });
  }

  render() {
    return (
      <>
        <Overview
          tasks={this.state.tasksArray}
          index={this.state.taskCounter}
          callback={this.handleDelete}
          toggleEdit={this.toggleEdit}
        />
        <form onSubmit={this.handleSubmit} className='task-submit-form'>
          <label>
            Task Description:
            <input type="text" name="taskInput" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" name="formSubmit" value="Submit" />
          </label>
        </form>
      </>
    )
  }
}

export default App;
