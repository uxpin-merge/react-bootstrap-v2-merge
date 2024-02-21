import React from 'react'
import PropTypes from 'prop-types'
import { TransitionWrapper as TransitionWrapperM } from 'react-bootstrap'

const TransitionWrapper = (props) => {
  return <TransitionWrapperM {...props} />
}

TransitionWrapper.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,
}

export default TransitionWrapper
