import { connect } from 'react-redux'

import TodoList from '../components/TodoList'
import { deleteTodo, toggleTodo } from '../actions'

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

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
