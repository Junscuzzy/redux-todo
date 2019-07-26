import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import theme from '../theme'

const buttonReset = {
  background: 'none',
  border: 'none'
}

// make short string
const truncateString = (str, num = 20) =>
  str.length > num ? `${str.slice(0, num > 3 ? num - 3 : num)}...` : str

const TodoItem = ({ id, text, completed, index, toggleTodo, deleteTodo }) => {
  const [hover, setHover] = useState(false)

  // Truncate todoItem text with media queries
  const todoText = matches =>
    completed ? truncateString(text, matches ? 30 : 16) : text

  return (
    <MediaQuery minWidth="30em">
      {matches => (
        <li
          id={`todo-${id}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="pv1 flex justify-between list white br2 pointer"
          style={{ userSelect: 'none' }}
        >
          <span
            onClick={() => toggleTodo(id)}
            className={`relative pa1 link f5 ttu white ${
              index < 3 ? `fw7` : `fw4`
            }`}
          >
            {todoText(matches)}
            {completed && (
              <span
                style={{
                  borderBottom: '3px solid',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
                className="c-red absolute left-0 w-100"
              />
            )}
          </span>

          <div className="w-10 flex justify-end">
            {hover && (
              <button
                type="button"
                style={{ ...buttonReset, color: theme.colors.grey }}
                className="link f5 pointer yellow"
                title="Delete"
                onClick={() => deleteTodo(id)}
              >
                x
              </button>
            )}
          </div>
        </li>
      )}
    </MediaQuery>
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
