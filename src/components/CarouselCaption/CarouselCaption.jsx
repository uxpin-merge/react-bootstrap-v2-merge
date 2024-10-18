import React from 'react'
import PropTypes from 'prop-types'
import { Carousel as CarouselM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/carousel
 * @uxpindescription A slideshow component for cycling through elements—images or slides of text—like a carousel.
 * @uxpinnamespace Carousel
 */
const Caption = (props) => {
  return <CarouselM.Caption {...props} />
}

Caption.propTypes = {
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

  as: PropTypes.string,
}

export default Caption
