import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup as InputGroupM } from 'react-bootstrap'
import Text from '../InputGroupText/InputGroupText'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/input-group
 * @uxpindescription Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.
 */
const InputGroup = (props) => {
  return <InputGroupM {...props} />
}
InputGroup.Text = Text

InputGroup.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  as: PropTypes.string,
  /** @default 'input-group' */
  bsPrefix: PropTypes.string,
  /** Control the size of buttons and form elements from the top-level. */
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  /** Handles the input's rounded corners when using form validation.Use this when your input group contains both an input and feedback element. */
  hasValidation: PropTypes.bool,
}

export default InputGroup
