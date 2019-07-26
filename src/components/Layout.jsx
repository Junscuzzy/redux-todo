import React from 'react'
import MediaQuery from 'react-responsive'
import { Spring } from 'react-spring/renderprops'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <MediaQuery minWidth="30em">
    {matches => (
      <main
        className={`min-vh-100 flex justify-center items-center pa4-ns ${!matches &&
          `c-bg-pink`}`}
      >
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div
              id="App"
              style={props}
              className={`ph3 ph4-ns pv3 w-100 ${matches &&
                `br3 c-shadow mw6 pa2 c-bg-pink`}`}
            >
              {children}
            </div>
          )}
        </Spring>
      </main>
    )}
  </MediaQuery>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
