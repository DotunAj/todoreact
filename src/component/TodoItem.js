import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem
