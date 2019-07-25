import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ onCheck, checked }) => (
  <span className="flex flex-column justify-center">
    <button
      type="button"
      onClick={() => onCheck()}
      className={`dib relative pointer pa2 mr3 br2 b--dark-green bg-${
        checked ? 'dark-green' : 'white'
      } `}
    />
  </span>
)

Checkbox.propTypes = {
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default Checkbox
