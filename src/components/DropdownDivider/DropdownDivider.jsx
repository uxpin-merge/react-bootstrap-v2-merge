import React from 'react';
import PropTypes from 'prop-types';
import { DropdownDivider as DropdownDividerM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/DropdownDivider
* @uxpindescription TODO
*/


const DropdownDivider = (props) => {
  return <DropdownDividerM {...props} />;
};

DropdownDivider.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  role: PropTypes.string,
};

export default DropdownDivider;