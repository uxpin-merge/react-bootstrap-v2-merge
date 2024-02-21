import React from 'react'
import PropTypes from 'prop-types'
import { FormSelect as FormSelectM } from 'react-bootstrap'

const FormSelect = (props) => {
  return <FormSelectM {...props} />
}

FormSelect.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Add "valid" validation styles to the control */
  isValid: PropTypes.bool,
  /** Add "invalid" validation styles to the control and accompanying label */
  isInvalid: PropTypes.bool,
  /** @default {'form-select'} */
  bsPrefix: PropTypes.string,
  /** Size variants */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** The size attribute of the underlying HTML element.Specifies the number of visible options. */
  htmlSize: PropTypes.number,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input@controllable onChange */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
}

export default FormSelect
