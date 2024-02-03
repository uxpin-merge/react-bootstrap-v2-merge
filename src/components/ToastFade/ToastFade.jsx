import React from 'react';
import PropTypes from 'prop-types';
import { ToastFade as ToastFadeM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ToastFade
* @uxpindescription TODO
*/


const ToastFade = (props) => {
  return <ToastFadeM {...props} />;
};

ToastFade.propTypes = {
  children: PropTypes.node,

};

export default ToastFade;