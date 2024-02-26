import React from 'react'
import PropTypes from 'prop-types'
import { FigureImage as FigureImageM } from 'react-bootstrap'

const FigureImage = (props) => {
  return <FigureImageM {...props} />
}

FigureImage.propTypes = {
  /** Content of the component */
  // children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Sets image as fluid image. */
  fluid: PropTypes.bool,
  /**
   * `src` - The URL of the image to display. If `undefined`, no image will be displayed.
   */
  src: PropTypes.string,

  /**
   * `alt` - A string that serves as the alternative text for the image, describing what is displayed
   * if the image cannot be shown. This is crucial for accessibility, allowing screen readers to
   * describe the image to users who cannot see it.
   */
  alt: PropTypes.string,
  /**
   * `width` - Specifies the width of the image. Can be a number (pixels) or a string (percentage, ems, etc.).
   * If `undefined`, the image's natural width is used.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.undefined]),
  /**
   * `height` - Specifies the height of the image. Can be a number (pixels) or a string (percentage, ems, etc.).
   * If `undefined`, the image's natural height is used.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.undefined]),
  /** @default 'img' */
  bsPrefix: PropTypes.string,
  /** Sets image shape as rounded. */
  rounded: PropTypes.bool,
  /** Sets image shape as circle. */
  roundedCircle: PropTypes.bool,
  /** Sets image shape as thumbnail. */
  thumbnail: PropTypes.bool,
}

export default FigureImage
