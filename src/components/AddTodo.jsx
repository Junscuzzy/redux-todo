import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')
  const submit = () => {
    if (text.trim() !== '') addTodo(text)
    setText('')
  }

  return (
    <div className="w-100 pv4 flex justify-center">
      <input
        type="text"
        value={text}
        style={{ border: 0, outline: 'none' }}
        className="f6 h2 ph3 w-80 br2 c-shadow"
        placeholder="Add item and type Enter..."
        onChange={e => setText(e.target.value)}
        onKeyUp={e => e.keyCode === 13 && submit()}
      />
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
