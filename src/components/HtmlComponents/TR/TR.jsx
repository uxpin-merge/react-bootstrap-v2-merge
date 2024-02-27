import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const TR = (props) => {
  return <tr {...props} />
}

TR.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.string,

  // /** Override styles */
  style: PropTypes.object,
}

export default TR
