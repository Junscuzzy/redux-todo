import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deleteTodo, toggleTodo } from '../actions'

const buttonReset = {
  background: 'none',
  border: 'none'
}

const TodoItem = ({ id, text, completed, index, toggTodo, delTodo }) => (
  <li className="f3 pv1 flex justify-between">
    <button
      type="button"
      className="link dim pointer"
      onClick={() => toggTodo(id)}
      style={{
        ...buttonReset,
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {`${index + 1}. ${text}`}
    </button>
    <button
      type="button"
      style={buttonReset}
      className="link dim pointer"
      title="Delete"
      onClick={() => delTodo(id)}
    >
      x
    </button>
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  toggTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  delTodo: deleteTodo,
  toggTodo: toggleTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)
