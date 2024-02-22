import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButtonGroup as ToggleButtonGroupM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/buttons#checkbox--radio
 * @uxpindescription Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 */
const ToggleButtonGroup = (props) => {
  return <ToggleButtonGroupM {...props} />
}

ToggleButtonGroup.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** An HTML `<input>` name for each child button.__Required if `type` is set to `'radio'`__ */
  name: PropTypes.string,
  /** The value, or array of values, of the active (pressed) buttons@controllable onChange
   * @uxpinbind onChange 0
   */
  value: PropTypes.string,
  /** Callback fired when a button is pressed, depending on whether the `type`is `'radio'` or `'checkbox'`, `onChange` will be called with the value orarray of active values@controllable value */
  onChange: PropTypes.func,
  /** The input `type` of the rendered buttons, determines the toggle behaviorof the buttons */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /** Sets the size for all Buttons in the group.@type ('sm'|'lg') */
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  /** Make the set of Buttons appear vertically stacked. */
  vertical: PropTypes.bool,
}

export default ToggleButtonGroup
