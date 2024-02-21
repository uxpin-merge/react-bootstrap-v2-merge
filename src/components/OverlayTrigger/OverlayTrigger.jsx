import React from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger as OverlayTriggerM } from 'react-bootstrap'

const OverlayTrigger = (props) => {
  return <OverlayTriggerM {...props} />
}

OverlayTrigger.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** Specify which action or actions trigger Overlay visibilityThe `click` trigger ignores the configured `delay`.@type {'hover' | 'click' |'focus' | Array<'hover' | 'click' |'focus'>} */
  trigger: PropTypes.oneOf([('hover', 'click', 'focus')]),
  /** A millisecond delay amount to show and hide the Overlay once triggered */
  delay: PropTypes.string,
  /** The visibility of the Overlay. `show` is a _controlled_ prop so should be pairedwith `onToggle` to avoid breaking user interactions.Manually toggling `show` does **not** wait for `delay` to change the visibility.@controllable onToggle */
  show: PropTypes.bool,
  /** The initial visibility state of the Overlay. */
  defaultShow: PropTypes.bool,
  /** A callback that fires when the user triggers a change in tooltip visibility.`onToggle` is called with the desired next `show`, and generally should be passedback to the `show` prop. `onToggle` fires _after_ the configured `delay`@controllable `show` */
  onToggle: PropTypes.func,
  /** The initial flip state of the Overlay. */
  flip: PropTypes.bool,
  /** An element or text to overlay next to the target. */
  overlay: PropTypes.string,
  /** @private */
  target: PropTypes.string,
  /** @private */
  onHide: PropTypes.string,
  /** The placement of the Overlay in relation to it's `target`. */
  placement: PropTypes.string,
  /** A Popper.js config object passed to the underlying popper instance. */
  popperConfig: PropTypes.object,
}

export default OverlayTrigger
