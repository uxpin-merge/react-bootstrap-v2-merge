import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/form-control
 * @uxpindescription Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.
 * @uxpinnamespace Form
 */
const Control = (props) => {
  return <FormM.Control {...props} />
}

Control.propTypes = {
  /** Content of the component */
  // children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,
  /** Placeholder text for the Input */
  placeholder: PropTypes.string,
  /** Add "valid" validation styles to the control */
  isValid: PropTypes.bool,
  /** Add "invalid" validation styles to the control and accompanying label */
  isInvalid: PropTypes.bool,
  /** The underlying HTML element to use when rendering the FormControl.
   */
  as: PropTypes.oneOf(['input', 'textarea', 'color', 'file']),
  /**  Specifies the visible number of lines in a text area */
  rows: PropTypes.number,
  /** @default {'form-control'} */
  bsPrefix: PropTypes.string,
  /** The FormControl `ref` will be forwarded to the underlying input element,which means unless `as` is a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** Input size variants */
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  /** The size attribute of the underlying HTML element.Specifies the visible width in characters if `as` is `'input'`. */
  htmlSize: PropTypes.number,
  /** Render the input as plain text. Generally used along side `readOnly`. */
  plaintext: PropTypes.bool,
  /** Make the control readonly */
  readOnly: PropTypes.bool,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input @controllable onChange
   * @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
  /**  Type of the `input` element */
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),

  /**  Specifies that a text area is required/must be filled out */
  required: PropTypes.bool,

  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  id: PropTypes.string,
}

export default Control
