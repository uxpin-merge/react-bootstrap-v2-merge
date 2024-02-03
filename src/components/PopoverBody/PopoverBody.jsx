import React from 'react';
import PropTypes from 'prop-types';
import { PopoverBody as PopoverBodyM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/PopoverBody
* @uxpindescription TODO
*/


const PopoverBody = (props) => {
  return <PopoverBodyM {...props} />;
};

PopoverBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default PopoverBody;