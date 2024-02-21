import React from 'react'
import PropTypes from 'prop-types'
import { ModalFooter as ModalFooterM } from 'react-bootstrap'

const ModalFooter = (props) => {
  return <ModalFooterM {...props} />
}

ModalFooter.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default ModalFooter
