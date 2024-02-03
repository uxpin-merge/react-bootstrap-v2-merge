import React from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand as NavbarBrandM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/NavbarBrand
* @uxpindescription TODO
*/


const NavbarBrand = (props) => {
  return <NavbarBrandM {...props} />;
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
/** @default 'navbar' */
  bsPrefix: PropTypes.string,
  /** An href, when provided the Brand will render as an `<a>` element (unless `as` is provided). */
  href: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.string,
};

export default NavbarBrand;