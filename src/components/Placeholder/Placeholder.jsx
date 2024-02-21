import React from 'react'
import PropTypes from 'prop-types'
import { Placeholder as PlaceholderM } from 'react-bootstrap'

const Placeholder = (props) => {
  return <PlaceholderM {...props} />
}

Placeholder.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
  /** @default 'placeholder' */
  bsPrefix: PropTypes.string,
  /** Changes the animation of the placeholder.@type ('glow'|'wave') */
  animation: PropTypes.oneOf(['glow', 'wave']),
  /** Change the background color of the placeholder. */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Component size variations.@type ('xs'|'sm'|'lg') */
  size: PropTypes.oneOf(['xs', 'sm', 'lg']),
}

export default Placeholder
