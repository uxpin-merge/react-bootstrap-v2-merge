import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/carousel
 * @uxpindescription A slideshow component for cycling through elements—images or slides of text—like a carousel.
 * @uxpinnamespace Carousel
 */
const Item = (props) => {
  return <CarouselM.Item {...props} />
}

Item.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'carousel-item' */
  bsPrefix: PropTypes.string,
  /** The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's `interval` prop value if none is specified. */
  interval: PropTypes.number,
}

export default Item
