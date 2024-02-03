import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButtonGroup as ToggleButtonGroupM } from 'react-bootstrap';

const ToggleButtonGroup = (props) => {
  return <ToggleButtonGroupM {...props} />;
};

ToggleButtonGroup.propTypes = {
  children: PropTypes.node,
/** An HTML `<input>` name for each child button.__Required if `type` is set to `'radio'`__ */
  name: PropTypes.string,
  /** The value, or array of values, of the active (pressed) buttons@controllable onChange */
  value: PropTypes.string,
  /** Callback fired when a button is pressed, depending on whether the `type`is `'radio'` or `'checkbox'`, `onChange` will be called with the value orarray of active values@controllable value */
  onChange: PropTypes.func,
  /** The input `type` of the rendered buttons, determines the toggle behaviorof the buttons */
  type: PropTypes.string,
  /** Sets the size for all Buttons in the group.@type ('sm'|'lg') */
  size: PropTypes.oneOf(['default','sm','lg']),
  /** Make the set of Buttons appear vertically stacked. */
  vertical: PropTypes.bool,
};

export default ToggleButtonGroup;
