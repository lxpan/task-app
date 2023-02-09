import React from 'react';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      tasks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSubmit(e) {
    alert('Tasks Array: ' + this.state.inputText);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Overview />
        <form onSubmit={this.handleSubmit}>
          <label>
            Task Description:
            <input type="text" name="taskInput" value={this.state.text} onChange={this.handleChange} />
            <input type="submit" name="formSubmit" value="Submit" />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
