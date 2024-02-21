import React from 'react'
import PropTypes from 'prop-types'
import { ToastBody as ToastBodyM } from 'react-bootstrap'

const ToastBody = (props) => {
  return <ToastBodyM {...props} />
}

ToastBody.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default ToastBody
