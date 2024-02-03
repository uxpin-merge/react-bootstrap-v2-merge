import React from 'react';
import PropTypes from 'prop-types';
import { OffcanvasToggling as OffcanvasTogglingM } from 'react-bootstrap';

const OffcanvasToggling = (props) => {
  return <OffcanvasTogglingM {...props} />;
};

OffcanvasToggling.propTypes = {
  children: PropTypes.node,
/** Show the component; triggers the fade in or fade out animation */
  in: PropTypes.bool,
  /** Wait until the first "enter" transition to mount the component (add it to the DOM) */
  mountOnEnter: PropTypes.bool,
  /** Unmount the component (remove it from the DOM) when it is faded out */
  unmountOnExit: PropTypes.bool,
  /** Run the fade in animation when the component mounts, if it is initiallyshown */
  appear: PropTypes.bool,
  /** Duration of the fade animation in milliseconds, to ensure that finishingcallbacks are fired even if the original browser transition end events arecanceled */
  timeout: PropTypes.number,
  /** Callback fired before the component fades in */
  onEnter: PropTypes.func,
  /** Callback fired after the component starts to fade in */
  onEntering: PropTypes.func,
  /** Callback fired after the has component faded in */
  onEntered: PropTypes.func,
  /** Callback fired before the component fades out */
  onExit: PropTypes.func,
  /** Callback fired after the component starts to fade out */
  onExiting: PropTypes.func,
  /** Callback fired after the component has faded out */
  onExited: PropTypes.func,
};

export default OffcanvasToggling;