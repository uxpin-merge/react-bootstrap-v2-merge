import React from 'react';
import PropTypes from 'prop-types';
import { FormCheckLabel as FormCheckLabelM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FormCheckLabel
* @uxpindescription TODO
*/


const FormCheckLabel = (props) => {
  return <FormCheckLabelM {...props} />;
};

FormCheckLabel.propTypes = {
  children: PropTypes.node,
/** @default 'form-check-label' */
  bsPrefix: PropTypes.string,
  /** The HTML for attribute for associating the label with an input */
  htmlFor: PropTypes.string,
};

export default FormCheckLabel;