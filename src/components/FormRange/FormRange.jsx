import React from 'react'
import PropTypes from 'prop-types'
import { FormRange as FormRangeM } from 'react-bootstrap'

const FormRange = (props) => {
  return <FormRangeM {...props} />
}

FormRange.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default {'form-range'} */
  bsPrefix: PropTypes.string,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input@controllable onChange */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  id: PropTypes.string,
}

export default FormRange
