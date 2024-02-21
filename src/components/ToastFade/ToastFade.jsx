import React from 'react'
import PropTypes from 'prop-types'
import { ToastFade as ToastFadeM } from 'react-bootstrap'

const ToastFade = (props) => {
  return <ToastFadeM {...props} />
}

ToastFade.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,
}

export default ToastFade
