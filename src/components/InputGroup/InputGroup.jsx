import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup as InputGroupM } from 'react-bootstrap'

const InputGroup = (props) => {
  return <InputGroupM {...props} />
}

InputGroup.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  /** @default 'input-group' */
  bsPrefix: PropTypes.string,
  /** Control the size of buttons and form elements from the top-level. */
  size: PropTypes.oneOf(['sm', 'lg']),
  /** Handles the input's rounded corners when using form validation.Use this when your input group contains both an input and feedback element. */
  hasValidation: PropTypes.bool,
}

export default InputGroup
