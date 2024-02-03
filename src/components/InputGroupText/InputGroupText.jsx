import React from 'react';
import PropTypes from 'prop-types';
import { InputGroupText as InputGroupTextM } from 'react-bootstrap';

const InputGroupText = (props) => {
  return <InputGroupTextM {...props} />;
};

InputGroupText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default InputGroupText;