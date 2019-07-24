import React from 'react'
import PropTypes from 'prop-types'

const buttonReset = {
  background: 'none',
  border: 'none'
}

const TodoItem = ({ id, text, completed, index, toggleTodo, deleteTodo }) => (
  <li className="f3 pv1 flex justify-between">
    <button
      type="button"
      className="link dim pointer"
      onClick={() => toggleTodo(id)}
      style={{
        ...buttonReset,
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {`${index + 1}. ${text}`}
    </button>
    <button
      type="button"
      style={buttonReset}
      className="link dim pointer"
      title="Delete"
      onClick={() => deleteTodo(id)}
    >
      x
    </button>
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
