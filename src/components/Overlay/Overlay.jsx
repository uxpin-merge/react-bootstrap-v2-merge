import React from 'react'
import PropTypes from 'prop-types'
import { Overlay as OverlayM } from 'react-bootstrap'

const Overlay = (props) => {
  return <OverlayM {...props} />
}

Overlay.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** Animate the entering and exiting of the Overlay. `true` will use the `<Fade>` transition,or a custom react-transition-group `<Transition>` component can be provided. */
  transition: PropTypes.string,
  /** A set of popper options and props passed directly to Popper. */
  popperConfig: PropTypes.object,
  /** Specify whether the overlay should trigger onHide when the user clicks outside the overlay */
  rootClose: PropTypes.bool,
  /** The placement of the Overlay in relation to it's `target`. */
  placement: PropTypes.string,
  /** Set the visibility of the Overlay */
  show: PropTypes.bool,
  /** A component instance, DOM node, or function that returns either.The `container` element will have the Overlay appended to it via a React portal. */
  container: PropTypes.string,
  /** A component instance, DOM node, or function that returns either.The overlay will be positioned in relation to the `target` */
  target: PropTypes.string,
  /** Specify event for triggering a "root close" toggle. */
  rootCloseEvent: PropTypes.string,
  /** A callback invoked by the overlay when it wishes to be hidden. Required if`rootClose` is specified. */
  onHide: PropTypes.func,
  /** Callback fired before the Overlay transitions in */
  onEnter: PropTypes.func,
  /** Callback fired as the Overlay begins to transition in */
  onEntering: PropTypes.func,
  /** Callback fired after the Overlay finishes transitioning in */
  onEntered: PropTypes.func,
  /** Callback fired right before the Overlay transitions out */
  onExit: PropTypes.func,
  /** Callback fired as the Overlay begins to transition out */
  onExiting: PropTypes.func,
  /** Callback fired after the Overlay finishes transitioning out */
  onExited: PropTypes.func,
}

export default Overlay
