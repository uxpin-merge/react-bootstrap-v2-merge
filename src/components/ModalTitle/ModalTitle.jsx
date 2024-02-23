import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ModalM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/modal
 * @uxpindescription Add dialogs to your site for lightboxes, user notifications, or completely custom content.
 * @uxpinnamespace Modal
 */
const Title = (props) => {
  return <ModalM.Title {...props} />
}

Title.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default Title
