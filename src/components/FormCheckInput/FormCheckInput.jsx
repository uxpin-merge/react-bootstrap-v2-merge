import React from 'react'
import PropTypes from 'prop-types'
import { FormCheckInput as FormCheckInputM } from 'react-bootstrap'

const FormCheckInput = (props) => {
  return <FormCheckInputM {...props} />
}

FormCheckInput.propTypes = {
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

  /** The type of checkable. */
  type: PropTypes.string,
  /** Manually style the input as valid */
  isValid: PropTypes.bool,
  /** Manually style the input as invalid */
  isInvalid: PropTypes.bool,
  /** The underlying HTML element to use when rendering the FormCheckInput. */
  as: PropTypes.string,
  /** @default 'form-check-input' */
  bsPrefix: PropTypes.string,
  /** A HTML id attribute, necessary for proper form accessibility. */
  id: PropTypes.string,
}

export default FormCheckInput
