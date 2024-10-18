import React from 'react'
import PropTypes from 'prop-types'
import { Navbar as NavbarM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navbar
 * @uxpindescription A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more.
 * @uxpinnamespace Navbar
 */
const Brand = (props) => {
  return <NavbarM.Brand {...props} />
}

Brand.propTypes = {
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

  /** @default 'navbar' */
  bsPrefix: PropTypes.string,
  /** An href, when provided the Brand will render as an `<a>` element (unless `as` is provided). */
  href: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.string,
}

export default Brand
