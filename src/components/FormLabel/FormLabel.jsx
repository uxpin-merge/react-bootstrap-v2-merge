import React from 'react'
import PropTypes from 'prop-types'
import { Form as FormM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/forms/overview
 * @uxpindescription range inputs for consistent cross-browser styling and built-in customization.
 * @uxpinnamespace Form
 */
const Label = (props) => {
  return <FormM.Label {...props} />
}

Label.propTypes = {
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

  /** Set a custom element for this component */
  as: PropTypes.string,
  /** Renders the FormLabel as a `<Col>` component (accepting all the same props),as well as adding additional styling for horizontal forms. */
  column: PropTypes.string,
  /** Hides the label visually while still allowing it to beread by assistive technologies. */
  visuallyHidden: PropTypes.bool,
  /** @default 'form-label' */
  bsPrefix: PropTypes.string,
  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  htmlFor: PropTypes.string,
  /** The FormLabel `ref` will be forwarded to the underlying element.Unless the FormLabel is rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
}

export default Label
