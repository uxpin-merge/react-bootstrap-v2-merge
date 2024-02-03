import React from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel as FloatingLabelM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FloatingLabel
* @uxpindescription TODO
*/


const FloatingLabel = (props) => {
  return <FloatingLabelM {...props} />;
};

FloatingLabel.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** Sets `id` on `<FormControl>` and `htmlFor` on `<label>`. */
  controlId: PropTypes.string,
  /** Form control label. */
  label: PropTypes.node,
};

export default FloatingLabel;