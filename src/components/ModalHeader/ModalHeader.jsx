import React from 'react'
import PropTypes from 'prop-types'
import { ModalHeader as ModalHeaderM } from 'react-bootstrap'

const ModalHeader = (props) => {
  return <ModalHeaderM {...props} />
}

ModalHeader.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** Provides an accessible label for the closebutton. It is used for Assistive Technology when the label text is notreadable. */
  closeLabel: PropTypes.string,
  /** Specify whether the Component should contain a close button */
  closeButton: PropTypes.bool,
  /** @default 'modal-header' */
  bsPrefix: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** A Callback fired when the close button is clicked. If used directly insidea Modal component, the onHide will automatically be propagated up to theparent Modal `onHide`. */
  onHide: PropTypes.func,
}

export default ModalHeader
