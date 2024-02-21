import React from 'react'
import PropTypes from 'prop-types'
import { ModalTitle as ModalTitleM } from 'react-bootstrap'

const ModalTitle = (props) => {
  return <ModalTitleM {...props} />
}

ModalTitle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default ModalTitle
