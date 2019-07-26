import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, leftCount }) => (
  <>
    <h1 className="f3 ttu tr c-red mb0 mt4">{title}</h1>
    <p className="f7 fw4 white tr">
      {leftCount > 0 ? `${leftCount} left` : `All done :)`}
    </p>
  </>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  leftCount: PropTypes.number
}

Header.defaultProps = {
  leftCount: 0
}

export default Header
