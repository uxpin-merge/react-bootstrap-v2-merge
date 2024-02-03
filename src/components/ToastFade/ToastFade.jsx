import React from 'react';
import PropTypes from 'prop-types';
import { ToastFade as ToastFadeM } from 'react-bootstrap';

const ToastFade = (props) => {
  return <ToastFadeM {...props} />;
};

ToastFade.propTypes = {
  children: PropTypes.node,

};

export default ToastFade;