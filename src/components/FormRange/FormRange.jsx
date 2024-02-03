import React from 'react';
import PropTypes from 'prop-types';
import { FormRange as FormRangeM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FormRange
* @uxpindescription TODO
*/


const FormRange = (props) => {
  return <FormRangeM {...props} />;
};

FormRange.propTypes = {
  children: PropTypes.node,
/** @default {'form-range'} */
  bsPrefix: PropTypes.string,
  /** Make the control disabled */
  disabled: PropTypes.bool,
  /** The `value` attribute of underlying input@controllable onChange */
  value: PropTypes.string,
  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,
  /** Uses `controlId` from `<FormGroup>` if not explicitly specified. */
  id: PropTypes.string,
};

export default FormRange;