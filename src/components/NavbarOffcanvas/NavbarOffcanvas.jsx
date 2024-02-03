import React from 'react';
import PropTypes from 'prop-types';
import { NavbarOffcanvas as NavbarOffcanvasM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/NavbarOffcanvas
* @uxpindescription TODO
*/


const NavbarOffcanvas = (props) => {
  return <NavbarOffcanvasM {...props} />;
};

NavbarOffcanvas.propTypes = {
  children: PropTypes.node,

};

export default NavbarOffcanvas;