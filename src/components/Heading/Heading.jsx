import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({ as: Component = 'h1', children, className, style }) => {
  // The Component variable will dynamically determine which HTML tag to use
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  )
}

Typography.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  /** Add Bootstrap classes */
  className: PropTypes.string, // Class names are typically strings

  /** Override styles */
  style: PropTypes.object,

  /** Determines the tag to be used for the component */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default Typography
