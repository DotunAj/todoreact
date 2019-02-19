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
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" /> {' '}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

export default TodoItem
