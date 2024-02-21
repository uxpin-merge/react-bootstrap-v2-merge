import React from 'react'
import PropTypes from 'prop-types'
import { OffcanvasHeader as OffcanvasHeaderM } from 'react-bootstrap'

const OffcanvasHeader = (props) => {
  return <OffcanvasHeaderM {...props} />
}

OffcanvasHeader.propTypes = {
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
  /** @default 'offcanvas-header' */
  bsPrefix: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** A Callback fired when the close button is clicked. If used directly insidea Offcanvas component, the onHide will automatically be propagated up to theparent Offcanvas `onHide`. */
  onHide: PropTypes.func,
}

export default OffcanvasHeader
