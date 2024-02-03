import React from 'react';
import PropTypes from 'prop-types';
import { NavbarCollapse as NavbarCollapseM } from 'react-bootstrap';

const NavbarCollapse = (props) => {
  return <NavbarCollapseM {...props} />;
};

NavbarCollapse.propTypes = {
  children: PropTypes.node,
/** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
};

export default NavbarCollapse;