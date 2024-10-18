import React from 'react'
import PropTypes from 'prop-types'
import { OffcanvasTitle as OffcanvasTitleM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/offcanvas
 * @uxpindescription Build hidden sidebars into your project for navigation, shopping carts, and more.
 */
const OffcanvasTitle = (props) => {
  return <OffcanvasTitleM {...props} />
}

OffcanvasTitle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default OffcanvasTitle
