import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'

import Checkbox from './Checkbox'
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
          className="pv1 list white pointer"
        >
          <div
            className={`flex justify-between pa1 dib flex br2 ${
              hover ? 'c-shadow' : ''
            }`}
          >
            <div className="flex w-90">
              <Checkbox onCheck={() => toggleTodo(id)} checked={completed} />
              <span
                className="c-red relative fw9 pa1"
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
              >
                <span
                  className={`link f5 ttu white ${index < 3 ? `fw7` : `fw4`}`}
                >
                  {todoText(matches)}
                </span>
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
            </div>

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
