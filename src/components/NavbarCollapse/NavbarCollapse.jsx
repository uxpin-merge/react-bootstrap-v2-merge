import React from 'react'
import PropTypes from 'prop-types'
import { NavbarCollapse as NavbarCollapseM } from 'react-bootstrap'

const NavbarCollapse = (props) => {
  return <NavbarCollapseM {...props} />
}

NavbarCollapse.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
}

export default NavbarCollapse
