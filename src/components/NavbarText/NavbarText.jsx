import React from 'react';
import PropTypes from 'prop-types';
import { NavbarText as NavbarTextM } from 'react-bootstrap';

const NavbarText = (props) => {
  return <NavbarTextM {...props} />;
};

NavbarText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default NavbarText;