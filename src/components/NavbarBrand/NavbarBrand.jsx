import React from 'react'
import PropTypes from 'prop-types'
import { NavbarBrand as NavbarBrandM } from 'react-bootstrap'

const NavbarBrand = (props) => {
  return <NavbarBrandM {...props} />
}

NavbarBrand.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'navbar' */
  bsPrefix: PropTypes.string,
  /** An href, when provided the Brand will render as an `<a>` element (unless `as` is provided). */
  href: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.string,
}

export default NavbarBrand
