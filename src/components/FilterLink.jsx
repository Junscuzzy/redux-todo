import React from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({ label, action, onClick, filter }) => (
  <button
    type="button"
    className="f5 br2 pa1 pr2 mh1"
    style={{
      background: 'none',
      border: filter === action ? '1px solid' : 'none'
    }}
    onClick={() => onClick(action)}
  >
    {label}
  </button>
)

FilterLink.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default FilterLink
