import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselM } from 'react-bootstrap'

const Carousel = (props) => {
  return <CarouselM {...props} />
}

Carousel.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  defaultActiveIndex: PropTypes.string,
  /** @default 'carousel' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Enables animation on the Carousel as it transitions between slides. */
  slide: PropTypes.bool,
  /** Animates slides with a crossfade animation instead of the default slide animation */
  fade: PropTypes.bool,
  /** Show the Carousel previous and next arrows for changing the current slide */
  controls: PropTypes.bool,
  /** Show a set of slide position indicators */
  indicators: PropTypes.bool,
  /** An array of labels for the indicators. Defaults to "Slide #" if not provided. */
  indicatorLabels: PropTypes.array,
  /** Controls the current visible slide@controllable onSelect */
  activeIndex: PropTypes.number,
  /** Callback fired when the active item changes. js(eventKey: number, event: Object | null) => void @controllable activeIndex */
  onSelect: PropTypes.func,
  /** Callback fired when a slide transition starts. js(eventKey: number, direction: 'left' | 'right') => void */
  onSlide: PropTypes.func,
  /** Callback fired when a slide transition ends. js(eventKey: number, direction: 'left' | 'right') => void */
  onSlid: PropTypes.func,
  /** The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle. */
  interval: PropTypes.string,
  /** Whether the carousel should react to keyboard events. */
  keyboard: PropTypes.bool,
  /** If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior. */
  pause: PropTypes.string,
  /** Whether the carousel should cycle continuously or have hard stops. */
  wrap: PropTypes.bool,
  /** Whether the carousel should support left/right swipe interactions on touchscreen devices. */
  touch: PropTypes.bool,
  /** Override the default button icon for the "previous" control */
  prevIcon: PropTypes.node,
  /** Label shown to screen readers only, can be used to show the previous elementin the carousel.Set to null to deactivate. */
  prevLabel: PropTypes.string,
  /** Override the default button icon for the "next" control */
  nextIcon: PropTypes.node,
  /** Label shown to screen readers only, can be used to show the next elementin the carousel.Set to null to deactivate. */
  nextLabel: PropTypes.string,
  /** Color variant that controls the colors of the controls, indicatorsand captions. */
  variant: PropTypes.string,
}

export default Carousel
