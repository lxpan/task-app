import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      tasksArray: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // update tasksArray with new task from input
    this.setState({
      tasksArray: [...this.state.tasksArray, this.state.inputText]
    });
  }

  render() {
    return (
      <>
        <Overview tasks={this.state.tasksArray}/>
        <form onSubmit={this.handleSubmit}>
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
