import React from 'react'
import PropTypes from 'prop-types'
import { NavbarOffcanvas as NavbarOffcanvasM } from 'react-bootstrap'

const NavbarOffcanvas = (props) => {
  return <NavbarOffcanvasM {...props} />
}

NavbarOffcanvas.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,
}

export default NavbarOffcanvas
