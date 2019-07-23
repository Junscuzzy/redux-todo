import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

const TodoList = ({ todos }) => (
  <ul className="list pa0">
    {todos.map((todo, index) => (
      <TodoItem key={todo.id} index={index} {...todo} />
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
  ).isRequired
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(mapStateToProps)(TodoList)
