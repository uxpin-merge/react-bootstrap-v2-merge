import React from 'react'
import PropTypes from 'prop-types'
import { Figure as FigureM } from 'react-bootstrap'

const Figure = (props) => {
  return <FigureM {...props} />
}

Figure.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default Figure
