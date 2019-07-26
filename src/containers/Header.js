import { connect } from 'react-redux'

import Header from '../components/Header'

const mapStateToProps = state => ({
  leftCount: state.todos.filter(el => !el.completed).length
})

export default connect(mapStateToProps)(Header)
