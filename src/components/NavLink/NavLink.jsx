import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as NavLinkM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/NavLink
* @uxpindescription TODO
*/


const NavLink = (props) => {
  return <NavLinkM {...props} />;
};

NavLink.propTypes = {
  children: PropTypes.node,
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
};

export default NavLink;