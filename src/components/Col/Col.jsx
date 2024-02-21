import React from 'react'
import PropTypes from 'prop-types'
import { Col as ColM } from 'react-bootstrap'

const Col = (props) => {
  return <ColM {...props} />
}

Col.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'col' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** The number of columns to span on extra small devices (<576px) */
  xs: PropTypes.string,
  /** The number of columns to span on small devices (≥576px) */
  sm: PropTypes.string,
  /** The number of columns to span on medium devices (≥768px) */
  md: PropTypes.string,
  /** The number of columns to span on large devices (≥992px) */
  lg: PropTypes.string,
  /** The number of columns to span on extra large devices (≥1200px) */
  xl: PropTypes.string,
  /** The number of columns to span on extra extra large devices (≥1400px) */
  xxl: PropTypes.string,
}

export default Col
