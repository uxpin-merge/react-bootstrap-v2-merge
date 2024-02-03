import React from 'react';
import PropTypes from 'prop-types';
import { PopoverHeader as PopoverHeaderM } from 'react-bootstrap';

const PopoverHeader = (props) => {
  return <PopoverHeaderM {...props} />;
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default PopoverHeader;