import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemText as DropdownItemTextM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/DropdownItemText
* @uxpindescription TODO
*/


const DropdownItemText = (props) => {
  return <DropdownItemTextM {...props} />;
};

DropdownItemText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default DropdownItemText;