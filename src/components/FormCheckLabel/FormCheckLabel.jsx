import React from 'react'
import PropTypes from 'prop-types'
import { FormCheckLabel as FormCheckLabelM } from 'react-bootstrap'

const FormCheckLabel = (props) => {
  return <FormCheckLabelM {...props} />
}

FormCheckLabel.propTypes = {
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

  /** @default 'form-check-label' */
  bsPrefix: PropTypes.string,
  /** The HTML for attribute for associating the label with an input */
  htmlFor: PropTypes.string,
}

export default FormCheckLabel
