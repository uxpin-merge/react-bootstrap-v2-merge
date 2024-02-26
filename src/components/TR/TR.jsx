import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/table
 * @uxpinhtmloutput
 */

const TR = (props) => {
  return <tr {...props} />
}

TR.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.object,

  // /** Override styles */
  style: PropTypes.object,
}

export default TR
