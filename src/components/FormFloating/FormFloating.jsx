import React from 'react';
import PropTypes from 'prop-types';
import { FormFloating as FormFloatingM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FormFloating
* @uxpindescription TODO
*/


const FormFloating = (props) => {
  return <FormFloatingM {...props} />;
};

FormFloating.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default FormFloating;