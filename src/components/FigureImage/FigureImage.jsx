import React from 'react'
import PropTypes from 'prop-types'
import { FigureImage as FigureImageM } from 'react-bootstrap'

const FigureImage = (props) => {
  return <FigureImageM {...props} />
}

FigureImage.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** Sets image as fluid image. */
  fluid: PropTypes.bool,
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
