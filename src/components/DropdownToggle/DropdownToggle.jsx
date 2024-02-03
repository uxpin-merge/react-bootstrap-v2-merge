import React from 'react';
import PropTypes from 'prop-types';
import { DropdownToggle as DropdownToggleM } from 'react-bootstrap';

const DropdownToggle = (props) => {
  return <DropdownToggleM {...props} />;
};

DropdownToggle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  split: PropTypes.bool,
  /** to passthrough to the underlying button or whatever from DropdownButton@private */
  childBsPrefix: PropTypes.string,
  /** @default 'dropdown-toggle' */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers.@type {string|number} */
  id: PropTypes.string,
};

export default DropdownToggle;