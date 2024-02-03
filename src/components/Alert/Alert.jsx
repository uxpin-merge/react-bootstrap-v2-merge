import React from 'react';
import PropTypes from 'prop-types';
import { Alert as AlertM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Alert
* @uxpindescription TODO
*/


const Alert = (props) => {
  return <AlertM {...props} />;
};

Alert.propTypes = {
  children: PropTypes.node,
/** @default 'alert' */
  bsPrefix: PropTypes.string,
  /** The Alert visual variant@type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'} */
  variant: PropTypes.string,
  /** Renders a properly aligned dismiss button, as well asadding extra horizontal padding to the Alert. */
  dismissible: PropTypes.bool,
  /** Controls the visual state of the Alert.@controllable onClose */
  show: PropTypes.bool,
  /** Callback fired when alert is closed.@controllable show */
  onClose: PropTypes.func,
  /** Sets the text for alert close button. */
  closeLabel: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** Animate the alert dismissal. Defaults to using `<Fade>` animation or use`false` to disable. A custom `react-transition-group` Transition can alsobe provided. */
  transition: PropTypes.string,
};

export default Alert;