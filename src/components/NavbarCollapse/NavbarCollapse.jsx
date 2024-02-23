import React from 'react'
import PropTypes from 'prop-types'
import { Navbar as NavbarM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navbar
 * @uxpindescription A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.
 * @uxpinnamespace Navbar
 */
const Collapse = (props) => {
  return <NavbarM.Collapse {...props} />
}

Collapse.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
}

export default Collapse
