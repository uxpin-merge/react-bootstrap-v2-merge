import React from 'react'
import PropTypes from 'prop-types'
import { Ratio as RatioM } from 'react-bootstrap'

const Ratio = (props) => {
  return <RatioM {...props} />
}

Ratio.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** Set the aspect ratio of the embed. A fraction or a percentage can alsobe used to create custom aspect ratios. */
  aspectRatio: PropTypes.string,
  /** @default 'ratio' */
  bsPrefix: PropTypes.string,
}

export default Ratio
