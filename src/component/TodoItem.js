import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px dotted #ccc',
      textDecoration: this.props.todo.is_completed ? 'line-through': 'none',
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          {title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem
