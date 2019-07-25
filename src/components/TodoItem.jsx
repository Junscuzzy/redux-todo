import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'

const buttonReset = {
  background: 'none',
  border: 'none'
}

const TodoItem = ({ id, text, completed, index, toggleTodo, deleteTodo }) => {
  const [hover, setHover] = useState(false)
  return (
    <li
      id={`todo-${id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="pv1 list bg-light-yellow pointer"
    >
      <div
        className={`flex justify-between pa2 br2 ${hover ? 'shadow-1' : ''}`}
      >
        <div className="flex">
          <Checkbox onCheck={() => toggleTodo(id)} checked={completed} />
          <span
            className="link dim f3"
            style={{
              textDecoration: completed ? 'line-through' : 'none',
              opacity: completed ? '0.5' : 1
            }}
          >
            {`${index + 1}. ${text}`}
          </span>
        </div>

        {hover && (
          <button
            type="button"
            style={buttonReset}
            className="link f3 pointer light-red"
            title="Delete"
            onClick={() => deleteTodo(id)}
          >
            x
          </button>
        )}
      </div>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
