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
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'placeholder' */
  bsPrefix: PropTypes.string,
  /** Changes the animation of the placeholder. */
  animation: PropTypes.string,
  size: PropTypes.string,
  /** Button variant. */
  variant: PropTypes.string,
}

export default PlaceholderButton
