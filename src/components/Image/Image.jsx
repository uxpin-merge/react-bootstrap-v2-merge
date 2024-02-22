import React from 'react'
import PropTypes from 'prop-types'
import { Image as ImageM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Images
 * @uxpindescription Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
 */
const Image = (props) => {
  return <ImageM {...props} />
}

Image.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  // 'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,
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
  /** Sets image as fluid image. */
  fluid: PropTypes.bool,
  /** Sets image shape as rounded. */
  rounded: PropTypes.bool,
  /** Sets image shape as circle. */
  roundedCircle: PropTypes.bool,
  /** Sets image shape as thumbnail. */
  thumbnail: PropTypes.bool,
  /** @default 'img' */
  bsPrefix: PropTypes.string,

  /**
   * `crossOrigin` - Controls CORS (Cross-Origin Resource Sharing) settings for the image. Options include:
   * - `"anonymous"`: CORS requests for the image will have no credentials sent (cookies, basic http auth, etc.).
   * - `"use-credentials"`: CORS requests for the image will include credentials.
   * - `""` (empty string): Treated the same as `"anonymous"` but is a legacy option.
   * - `undefined`: The attribute is not added, and CORS is not used.
   */
  // crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '', undefined]),

  /**
   * `decoding` - Suggests the browser's decoding process for the image. Options include:
   * - `"async"`: Decode the image asynchronously to reduce delay in presenting other content.
   * - `"auto"`: Default. Browser decides the best decoding method.
   * - `"sync"`: Decode the image synchronously, useful for images that must be displayed immediately.
   * - `undefined`: Behaves as if the decoding attribute is not specified, defaulting to `"auto"`.
   */
  decoding: PropTypes.oneOf(['async', 'auto', 'sync', undefined]),

  /**
   * `sizes` - Describes the display size of the image in different conditions, used in conjunction with `srcSet`
   * to decide which image to download and display. If `undefined`, the size is determined by the image's display size.
   */
  // sizes: PropTypes.string,

  /**
   * `srcSet` - A string containing one or more image URLs along with their size descriptions, allowing the browser
   * to choose the most appropriate image to display based on the device's screen size and resolution.
   * If `undefined`, the `src` attribute is used as the sole source for the image.
   */
  // srcSet: PropTypes.string,

  /**
   * `useMap` - Specifies the name of a client-side image map associated with the image. An image map allows
   * users to click on different parts of an image and be directed to different destinations. If `undefined`,
   * the image is not associated with an image map.
   */
  // useMap: PropTypes.string,
}

export default Image
