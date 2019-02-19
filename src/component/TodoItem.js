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
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem
