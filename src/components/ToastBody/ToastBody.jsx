import React from 'react';
import PropTypes from 'prop-types';
import { ToastBody as ToastBodyM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ToastBody
* @uxpindescription TODO
*/


const ToastBody = (props) => {
  return <ToastBodyM {...props} />;
};

ToastBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ToastBody;