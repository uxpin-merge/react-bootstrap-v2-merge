import React from 'react'
import PropTypes from 'prop-types'
import { Nav as NavM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navs
 * @uxpindescription Documentation and examples for how to use Bootstrap’s included navigation components.
 * @uxpinnamespace Nav
 */
const Link = (props) => {
  return <NavM.Link {...props} />
}

Link.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'a' */
  as: PropTypes.string,
  /** The disabled state of the NavItem item. */
  disabled: PropTypes.bool,
  /** @default 'nav-link' */
  bsPrefix: PropTypes.string,
  /** The active state of the NavItem item. */
  active: PropTypes.bool,
  /** The ARIA role for the `NavLink`, In the context of a 'tablist' parent Nav,the role defaults to 'tab' */
  role: PropTypes.string,
  /** The HTML href attribute for the `NavLink` */
  href: PropTypes.string,
  /** Uniquely identifies the `NavItem` amongst its siblings,used to determine and control the active state of the parent `Nav` */
  eventKey: PropTypes.string,
}

export default Link
