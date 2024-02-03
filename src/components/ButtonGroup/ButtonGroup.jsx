import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup as ButtonGroupM } from 'react-bootstrap';

const ButtonGroup = (props) => {
  return <ButtonGroupM {...props} />;
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
/** Make the set of Buttons appear vertically stacked. */
  vertical: PropTypes.bool,
  /** An ARIA role describing the button group. Usually the default"group" role is fine. An `aria-label` or `aria-labelledby`prop is also recommended. */
  role: PropTypes.string,
  as: PropTypes.string,
  /** @default 'btn-group' */
  bsPrefix: PropTypes.string,
  /** Sets the size for all Buttons in the group.@type ('sm'|'lg') */
  size: PropTypes.string,
};

export default ButtonGroup;