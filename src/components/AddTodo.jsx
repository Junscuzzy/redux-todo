import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addTodo } from '../actions'
import { button } from '../tachyons'

const AddTodo = props => {
  const [text, setText] = useState('')
  const submit = () => {
    props.addTodo(text)
    setText('')
  }

  return (
    <div className="w-100 flex flex-wrap">
      <div className="flex-auto">
        <input
          type="text"
          value={text}
          className="f4 pa2 w-100 m-auto dib"
          placeholder="Add item and type Enter..."
          onChange={e => setText(e.target.value)}
          onKeyUp={e => e.keyCode === 13 && submit()}
        />
      </div>
      <button className={button} type="submit" onClick={() => submit()}>
        Add
      </button>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = { addTodo }

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
