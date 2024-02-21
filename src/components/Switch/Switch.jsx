import React from 'react'
import PropTypes from 'prop-types'
import { Switch as SwitchM } from 'react-bootstrap'

const Switch = (props) => {
  return <SwitchM {...props} />
}

Switch.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,
}

export default Switch
