import React from 'react';
import PropTypes from 'prop-types';
import { NavbarCollapse as NavbarCollapseM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/NavbarCollapse
* @uxpindescription TODO
*/


const NavbarCollapse = (props) => {
  return <NavbarCollapseM {...props} />;
};

NavbarCollapse.propTypes = {
  children: PropTypes.node,
/** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
};

export default NavbarCollapse;