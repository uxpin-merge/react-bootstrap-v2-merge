import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel as FormLabelM } from 'react-bootstrap';

const FormLabel = (props) => {
  return <FormLabelM {...props} />;
};

FormLabel.propTypes = {
  children: PropTypes.node,
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
};

export default FormLabel;