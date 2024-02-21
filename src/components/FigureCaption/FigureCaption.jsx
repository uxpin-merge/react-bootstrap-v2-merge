import React from 'react'
import PropTypes from 'prop-types'
import { FigureCaption as FigureCaptionM } from 'react-bootstrap'

const FigureCaption = (props) => {
  return <FigureCaptionM {...props} />
}

FigureCaption.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default FigureCaption
