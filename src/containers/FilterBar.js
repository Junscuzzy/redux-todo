import { connect } from 'react-redux'

import { setVisibilityFilter, clearCompleted } from '../actions'
import FilterBar from '../components/FilterBar'

const mapStateToProps = state => ({
  filter: state.visibilityFilter,
  count: {
    all: state.todos.length,
    active: state.todos.filter(el => !el.completed).length,
    completed: state.todos.filter(el => el.completed).length
  }
})

const mapDispatchToProps = { setVisibilityFilter, clearCompleted }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
