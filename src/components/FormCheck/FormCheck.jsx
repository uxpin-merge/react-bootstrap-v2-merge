import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/checks-radios
 * @uxpindescription Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
 * @uxpinnamespace Form
 */
const Check = (props) => {
  return <FormM.Check {...props} />
}

Check.propTypes = {
  /** Content of the component */
  // children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,
  /** The type of checkable. */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /** Label for the control. */
  label: PropTypes.node,
  /** If the control is selected
   * @uxpinbind onChange 0.target.checked
   */
  checked: PropTypes.bool,
  /** Groups controls horizontally with other `FormCheck`s. */
  inline: PropTypes.bool,
  /** Put your checkboxes, radios, and switches on the opposite side. */
  reverse: PropTypes.bool,
  /** Disables the control. */
  disabled: PropTypes.bool,
  /** Manually style the input as valid */
  isValid: PropTypes.bool,
  /** Manually style the input as invalid */
  isInvalid: PropTypes.bool,
  /** Display feedback as a tooltip. */
  feedbackTooltip: PropTypes.bool,
  /** `title` attribute for the underlying `FormCheckLabel`. */
  title: PropTypes.string,
  /** The underlying HTML element to use when rendering the FormCheck. */
  as: PropTypes.string,
  /** A callback fired when the `check` prop changes */
  onChange: PropTypes.func,
  /** @default 'form-check' */
  bsPrefix: PropTypes.string,
  /** bsPrefix override for the base switch class.@default 'form-switch' */
  bsSwitchPrefix: PropTypes.string,
  /** The FormCheck `ref` will be forwarded to the underlying input element,which means it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** A HTML id attribute, necessary for proper form accessibility.An id is recommended for allowing label clicks to toggle the check control.This is **required** when `type="switch"` due to how they are rendered. */
  id: PropTypes.string,

  /** A message to display when the input is in a validation state */
  feedback: PropTypes.node,
  /** Specify whether the feedback is for valid or invalid fields */
  feedbackType: PropTypes.string,
}

export default Check
