import React from 'react'
import PropTypes from 'prop-types'
import { CarouselItem as CarouselItemM } from 'react-bootstrap'

const CarouselItem = (props) => {
  return <CarouselItemM {...props} />
}

CarouselItem.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'carousel-item' */
  bsPrefix: PropTypes.string,
  /** The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's `interval` prop value if none is specified. */
  interval: PropTypes.number,
}

export default CarouselItem
