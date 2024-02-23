import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/modal
 * @uxpindescription Add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * @uxpinnamespace Modal
 */
const Header = (props) => {
  return <ModalM.Header {...props} />
}

Header.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

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

export default Header
