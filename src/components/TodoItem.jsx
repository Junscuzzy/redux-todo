import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'

const buttonReset = {
  background: 'none',
  border: 'none'
}

const TodoItem = ({ id, text, completed, index, toggleTodo, deleteTodo }) => (
  <li
    className="flex justify-between pa2 bg-light-yellow"
    style={{ cursor: 'pointer' }}
  >
    <div className="flex">
      <Checkbox onCheck={() => toggleTodo(id)} checked={completed} />
      <span
        className="link dim f3"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {`${index + 1}. ${text}`}
      </span>
    </div>

    <button
      type="button"
      style={buttonReset}
      className="link dim f3 pointer"
      title="Delete"
      onClick={() => deleteTodo(id)}
    >
      x
    </button>
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
