import React from 'react';
import PropTypes from 'prop-types';
import { ToastBody as ToastBodyM } from 'react-bootstrap';

const ToastBody = (props) => {
  return <ToastBodyM {...props} />;
};

ToastBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ToastBody;