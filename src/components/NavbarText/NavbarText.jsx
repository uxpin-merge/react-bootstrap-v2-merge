import React from 'react';
import PropTypes from 'prop-types';
import { NavbarText as NavbarTextM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/NavbarText
* @uxpindescription TODO
*/


const NavbarText = (props) => {
  return <NavbarTextM {...props} />;
};

NavbarText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default NavbarText;