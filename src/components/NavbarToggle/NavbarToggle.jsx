import React from 'react'
import PropTypes from 'prop-types'
import { Navbar as NavbarM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navbar
 * @uxpindescription A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.
 * @uxpinnamespace Navbar
 */
const Toggle = (props) => {
  return <NavbarM.Toggle {...props} />
}

Toggle.propTypes = {
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

  /** An accessible ARIA label for the toggler button. */
  label: PropTypes.string,
  as: PropTypes.string,
  /** @default 'navbar-toggler' */
  bsPrefix: PropTypes.string,
  /** @private */
  onClick: PropTypes.func,
}

export default Toggle
