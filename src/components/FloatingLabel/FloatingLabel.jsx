import React from 'react'
import PropTypes from 'prop-types'
import { FloatingLabel as FloatingLabelM } from 'react-bootstrap'

const FloatingLabel = (props) => {
  return <FloatingLabelM {...props} />
}

FloatingLabel.propTypes = {
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
  /** Sets `id` on `<FormControl>` and `htmlFor` on `<label>`. */
  controlId: PropTypes.string,
  /** Form control label. */
  label: PropTypes.node,
}

export default FloatingLabel
