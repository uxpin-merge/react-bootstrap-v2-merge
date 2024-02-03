import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer as ToastContainerM } from 'react-bootstrap';

const ToastContainer = (props) => {
  return <ToastContainerM {...props} />;
};

ToastContainer.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** @default 'toast-container' */
  bsPrefix: PropTypes.string,
  /** Where the toasts will be placed within the container. */
  position: PropTypes.string,
  /** Specify the positioning method for the container. */
  containerPosition: PropTypes.string,
};

export default ToastContainer;