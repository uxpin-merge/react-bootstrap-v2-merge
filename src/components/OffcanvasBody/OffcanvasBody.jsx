import React from 'react'
import PropTypes from 'prop-types'
import { OffcanvasBody as OffcanvasBodyM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/offcanvas
 * @uxpindescription Build hidden sidebars into your project for navigation, shopping carts, and more.
 */
const OffcanvasBody = (props) => {
  return <OffcanvasBodyM {...props} />
}

OffcanvasBody.propTypes = {
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

export default OffcanvasBody
