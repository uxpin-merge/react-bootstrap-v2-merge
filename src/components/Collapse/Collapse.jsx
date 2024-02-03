import React from 'react';
import PropTypes from 'prop-types';
import { Collapse as CollapseM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Collapse
* @uxpindescription TODO
*/


const Collapse = (props) => {
  return <CollapseM {...props} />;
};

Collapse.propTypes = {
  children: PropTypes.node,
/** The dimension used when collapsing, or a function that returns thedimension */
  dimension: PropTypes.string,
  /** Show the component; triggers the expand or collapse animation */
  in: PropTypes.bool,
  /** Duration of the collapse animation in milliseconds, to ensure thatfinishing callbacks are fired even if the original browser transition endevents are canceled */
  timeout: PropTypes.number,
  /** Wait until the first "enter" transition to mount the component (add it to the DOM) */
  mountOnEnter: PropTypes.bool,
  /** Unmount the component (remove it from the DOM) when it is collapsed */
  unmountOnExit: PropTypes.bool,
  /** Run the expand animation when the component mounts, if it is initiallyshown */
  appear: PropTypes.bool,
  /** Function that returns the height or width of the animating DOM nodeAllows for providing some custom logic for how much the Collapse componentshould animate in its specified dimension. Called with the currentdimension prop value and the DOM node.@default element.offsetWidth | element.offsetHeight */
  getDimensionValue: PropTypes.func,
  /** Callback fired before the component expands */
  onEnter: PropTypes.func,
  /** Callback fired after the component starts to expand */
  onEntering: PropTypes.func,
  /** Callback fired after the component has expanded */
  onEntered: PropTypes.func,
  /** Callback fired before the component collapses */
  onExit: PropTypes.func,
  /** Callback fired after the component starts to collapse */
  onExiting: PropTypes.func,
  /** Callback fired after the component has collapsed */
  onExited: PropTypes.func,
  /** ARIA role of collapsible element */
  role: PropTypes.string,
};

export default Collapse;