import React from 'react'
import PropTypes from 'prop-types'
import { InputGroupText as InputGroupTextM } from 'react-bootstrap'

const InputGroupText = (props) => {
  return <InputGroupTextM {...props} />
}

InputGroupText.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default InputGroupText
