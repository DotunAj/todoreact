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

  // Toogle Complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.is_completed = !todo.is_completed;
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
