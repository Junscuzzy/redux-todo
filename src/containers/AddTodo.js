import { connect } from 'react-redux'

import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = { addTodo }

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
