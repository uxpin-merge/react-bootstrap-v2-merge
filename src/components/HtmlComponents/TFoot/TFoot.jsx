import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const TFoot = (props) => {
  return <tfoot {...props} />
}

TFoot.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.object,

  // /** Override styles */
  style: PropTypes.object,

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default TFoot
