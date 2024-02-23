import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/overview
 * @uxpindescription The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state.
 * @uxpinnamespace Form
 */
const Group = (props) => {
  return <FormM.Group {...props} />
}

Group.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  /** Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`. */
  controlId: PropTypes.string,
  /** The FormGroup `ref` will be forwarded to the underlying element.Unless the FormGroup is rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
}

export default Group
