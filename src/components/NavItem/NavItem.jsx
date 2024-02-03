import React from 'react';
import PropTypes from 'prop-types';
import { NavItem as NavItemM } from 'react-bootstrap';

const NavItem = (props) => {
  return <NavItemM {...props} />;
};

NavItem.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default NavItem;