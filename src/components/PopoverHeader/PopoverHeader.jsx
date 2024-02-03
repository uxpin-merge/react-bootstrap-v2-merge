import React from 'react';
import PropTypes from 'prop-types';
import { PopoverHeader as PopoverHeaderM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/PopoverHeader
* @uxpindescription TODO
*/


const PopoverHeader = (props) => {
  return <PopoverHeaderM {...props} />;
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default PopoverHeader;