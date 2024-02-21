import React from 'react'
import PropTypes from 'prop-types'
import { AbstractModalHeader as AbstractModalHeaderM } from 'react-bootstrap'

const AbstractModalHeader = (props) => {
  return <AbstractModalHeaderM {...props} />
}

AbstractModalHeader.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** Provides an accessible label for the closebutton. It is used for Assistive Technology when the label text is notreadable. */
  closeLabel: PropTypes.string,
  /** Specify whether the Component should contain a close button */
  closeButton: PropTypes.bool,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** A Callback fired when the close button is clicked. If used directly insidea ModalContext, the onHide will automatically be propagated upto the parent `onHide`. */
  onHide: PropTypes.func,
}

export default AbstractModalHeader
