import React, { useState } from 'react'
import PropTypes from 'prop-types'

import theme from '../theme'

const { red, grey } = theme.colors

const getButtonStyle = (active, hover) => {
  const variants = {
    base: { color: grey, backgroundColor: 'white' },
    active: { color: 'white', backgroundColor: red },
    baseHover: { color: 'white', backgroundColor: 'transparent' }
  }
  if (active) return variants.active
  if (hover) return variants.baseHover
  return variants.base
}

const FilterLink = ({ label, action, filter, onClick }) => {
  const [hover, setHover] = useState(false)
  const active = filter === action
  return (
    <button
      type="button"
      className={`f7 pa2 ma1 ma2-ns br3 c-shadow ${!active && `pointer`}`}
      style={{
        ...getButtonStyle(active, hover),
        border: 'none',
        transition: 'all 200ms'
      }}
      onClick={() => onClick(action)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  )
}

FilterLink.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default FilterLink
