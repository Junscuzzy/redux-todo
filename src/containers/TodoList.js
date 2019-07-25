import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { deleteTodo, toggleTodo, resetTodoOrder } from '../actions'

const getVisibleTodos = (todos, filter) => {
  const sortedTodos = todos.sort((a, b) => {
    if (a.index > b.index) return 1
    if (a.index < b.index) return -1
    return 0
  })

  switch (filter) {
    case 'SHOW_COMPLETED':
      return sortedTodos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return sortedTodos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return sortedTodos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo,
  resetTodoOrder
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
