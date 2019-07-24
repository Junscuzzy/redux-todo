import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="list pa0">
    {todos.map((todo, index) => (
      <TodoItem
        key={todo.id}
        toggleTodo={id => toggleTodo(id)}
        deleteTodo={id => deleteTodo(id)}
        index={index}
        {...todo}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
