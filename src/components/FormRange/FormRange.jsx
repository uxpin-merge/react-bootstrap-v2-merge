import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/range
 * @uxpindescription range inputs for consistent cross-browser styling and built-in customization.
 * @uxpinnamespace Form
 */
const Range = (props) => {
  return <FormM.Range {...props} />
}

Range.propTypes = {
  /** Content of the component */
  // children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  /** @default {'form-range'} */
  bsPrefix: PropTypes.string,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input@controllable onChange
   * @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  id: PropTypes.string,
}

export default Range
