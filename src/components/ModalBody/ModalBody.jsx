import React from 'react'
import PropTypes from 'prop-types'
import { ModalBody as ModalBodyM } from 'react-bootstrap'

const ModalBody = (props) => {
  return <ModalBodyM {...props} />
}

ModalBody.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default ModalBody
