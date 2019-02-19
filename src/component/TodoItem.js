import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f9f9f9',
      textDecoration: this.props.todo.is_completed ? 'line-through': 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todo-item" style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
        <p>{title}</p>
        {/* TODO: Implement click event to delete todo from todos array */}
        <button onClick={this.props.deleteTodo.bind(this, id)} className="todo-button"><i className="fas fa-times"></i></button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem
