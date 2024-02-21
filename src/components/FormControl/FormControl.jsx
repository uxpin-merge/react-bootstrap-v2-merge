import React from 'react'
import PropTypes from 'prop-types'
import { FormControl as FormControlM } from 'react-bootstrap'

const FormControl = (props) => {
  return <FormControlM {...props} />
}

FormControl.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** Add "valid" validation styles to the control */
  isValid: PropTypes.bool,
  /** Add "invalid" validation styles to the control and accompanying label */
  isInvalid: PropTypes.bool,
  /** The underlying HTML element to use when rendering the FormControl. */
  as: PropTypes.string,
  /** @default {'form-control'} */
  bsPrefix: PropTypes.string,
  /** The FormControl `ref` will be forwarded to the underlying input element,which means unless `as` is a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** Input size variants */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** The size attribute of the underlying HTML element.Specifies the visible width in characters if `as` is `'input'`. */
  htmlSize: PropTypes.number,
  /** Render the input as plain text. Generally used along side `readOnly`. */
  plaintext: PropTypes.bool,
  /** Make the control readonly */
  readOnly: PropTypes.bool,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input@controllable onChange */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
  /** The HTML input `type`, which is only relevant if `as` is `'input'` (the default). */
  type: PropTypes.string,
  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  id: PropTypes.string,
}

export default FormControl
