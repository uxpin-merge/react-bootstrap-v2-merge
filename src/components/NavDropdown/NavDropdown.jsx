import React from 'react'
import PropTypes from 'prop-types'
import { NavDropdown as NavDropdownM } from 'react-bootstrap'

const NavDropdown = (props) => {
  return <NavDropdownM {...props} />
}

NavDropdown.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** The content of the non-toggle Button. */
  title: PropTypes.node,
  /** Disables the toggle NavLink */
  disabled: PropTypes.bool,
  /** Style the toggle NavLink as active */
  active: PropTypes.bool,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: PropTypes.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed._see [DropdownMenu](#menu-props) for more details_ */
  rootCloseEvent: PropTypes.string,
  /** Menu color variant.Omitting this will use the default light color. */
  menuVariant: PropTypes.string,
  /** An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.@type {string} */
  id: PropTypes.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: PropTypes.func,
  /** @ignore */
  bsPrefix: PropTypes.string,
}

export default NavDropdown
