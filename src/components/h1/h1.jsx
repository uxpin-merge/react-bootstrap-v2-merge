import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertHeading
 * @uxpindescription Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 */

const h1 = (props) => {
  return <h1 {...props} />
}

h1.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.object,

  // /** Override styles */
  style: PropTypes.object,

  as: PropTypes.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default h1
