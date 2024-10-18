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
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  /** Set the aspect ratio of the embed. A fraction or a percentage can alsobe used to create custom aspect ratios. */
  aspectRatio: PropTypes.oneOf(['1x1', '4x3', '16x9', '21x9']),
  /** @default 'ratio' */
  bsPrefix: PropTypes.string,
}

export default Ratio
