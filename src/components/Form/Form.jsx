import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Form
* @uxpindescription TODO
*/


const Form = (props) => {
  return <FormM {...props} />;
};

Form.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** The Form `ref` will be forwarded to the underlying element,which means, unless it's rendered `as` a composite component,it will be a DOM node, when resolved.@type {ReactRef}@alias ref */
  _ref: PropTypes.string,
  /** Mark a form as having been validated. Setting it to `true` willtoggle any validation styles on the forms elements. */
  validated: PropTypes.bool,
};

export default Form;