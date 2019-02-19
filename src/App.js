import React, { Component } from 'react';
import './App.css';
import Todos from './component/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Pray for at least an hour",
        is_completed: false
      },
      {
        id: 2,
        title: "Brush you teeth",
        is_completed: false
      },
      {
        id: 3,
        title: "Read your bible for at least an hour",
        is_completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
