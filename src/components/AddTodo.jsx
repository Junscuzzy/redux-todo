import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const submit = () => {
    addTodo(text)
    setText('')
  }

  return (
    <input
      type="text"
      value={text}
      style={{ border: 0 }}
      className="f4 pa2 w-100 m-auto dib br2 shadow-3 b--dark-green"
      placeholder="Add item and type Enter..."
      onChange={e => setText(e.target.value)}
      onKeyUp={e => e.keyCode === 13 && submit()}
    />
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
