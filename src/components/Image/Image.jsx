import React from 'react'
import PropTypes from 'prop-types'
import { Image as ImageM } from 'react-bootstrap'

const Image = (props) => {
  return <ImageM {...props} />
}

Image.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
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
}

export default Image
