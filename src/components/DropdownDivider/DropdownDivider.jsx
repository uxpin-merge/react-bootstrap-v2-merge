import React from 'react';
import PropTypes from 'prop-types';
import { DropdownDivider as DropdownDividerM } from 'react-bootstrap';

const DropdownDivider = (props) => {
  return <DropdownDividerM {...props} />;
};

DropdownDivider.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  role: PropTypes.string,
};

export default DropdownDivider;