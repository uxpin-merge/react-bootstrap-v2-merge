import React from 'react'
import PropTypes from 'prop-types'
import { NavbarToggle as NavbarToggleM } from 'react-bootstrap'

const NavbarToggle = (props) => {
  return <NavbarToggleM {...props} />
}

NavbarToggle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** An accessible ARIA label for the toggler button. */
  label: PropTypes.string,
  as: PropTypes.string,
  /** @default 'navbar-toggler' */
  bsPrefix: PropTypes.string,
  /** @private */
  onClick: PropTypes.func,
}

export default NavbarToggle
