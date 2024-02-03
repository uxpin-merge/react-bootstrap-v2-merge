import React from 'react';
import PropTypes from 'prop-types';
import { DropdownHeader as DropdownHeaderM } from 'react-bootstrap';

const DropdownHeader = (props) => {
  return <DropdownHeaderM {...props} />;
};

DropdownHeader.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  role: PropTypes.string,
};

export default DropdownHeader;