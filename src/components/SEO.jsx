import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />

    <link
      href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />
  </Helmet>
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

SEO.defaultProps = {
  title: 'To do list',
  description: 'React-Redux learning application'
}

export default SEO
