import React from 'react'
import PropTypes from 'prop-types'
import { PlaceholderButton as PlaceholderButtonM } from 'react-bootstrap'

const PlaceholderButton = (props) => {
  return <PlaceholderButtonM {...props} />
}

PlaceholderButton.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'placeholder' */
  bsPrefix: PropTypes.string,
  /** Changes the animation of the placeholder. */
  animation: PropTypes.oneOf(['glow', 'wave']),
  /** Button variant. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Component size variations.@type ('xs'|'sm'|'lg') */
  size: PropTypes.oneOf(['xs', 'sm', 'default', 'lg']),
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

export default PlaceholderButton
