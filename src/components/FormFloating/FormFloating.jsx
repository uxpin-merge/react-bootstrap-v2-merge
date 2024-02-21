import React from 'react'
import PropTypes from 'prop-types'
import { FormFloating as FormFloatingM } from 'react-bootstrap'

const FormFloating = (props) => {
  return <FormFloatingM {...props} />
}

FormFloating.propTypes = {
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

export default FormFloating
