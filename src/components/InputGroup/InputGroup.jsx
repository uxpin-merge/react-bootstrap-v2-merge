import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup as InputGroupM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/InputGroup
* @uxpindescription TODO
*/


const InputGroup = (props) => {
  return <InputGroupM {...props} />;
};

InputGroup.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** @default 'input-group' */
  bsPrefix: PropTypes.string,
  /** Control the size of buttons and form elements from the top-level. */
  size: PropTypes.string,
  /** Handles the input's rounded corners when using form validation.Use this when your input group contains both an input and feedback element. */
  hasValidation: PropTypes.bool,
};

export default InputGroup;