import React from 'react'
import PropTypes from 'prop-types'
import { FormText as FormTextM } from 'react-bootstrap'

const FormText = (props) => {
  return <FormTextM {...props} />
}

FormText.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
  /** @default 'form-text' */
  bsPrefix: PropTypes.string,
  /** The FormText `ref` will be forwarded to the underlying element.Unless the FormText is rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** A convenience prop for add the `text-muted` class,since it's so commonly used here. */
  muted: PropTypes.bool,
}

export default FormText
