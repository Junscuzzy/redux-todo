import { connect } from 'react-redux'

import { setVisibilityFilter, clearCompleted } from '../actions'
import FilterBar from '../components/FilterBar'

const mapStateToProps = state => ({
  filter: state.visibilityFilter
})

const mapDispatchToProps = { setVisibilityFilter, clearCompleted }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar)
