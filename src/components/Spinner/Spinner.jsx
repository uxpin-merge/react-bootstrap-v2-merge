import React from 'react'
import PropTypes from 'prop-types'
import { Spinner as SpinnerM } from 'react-bootstrap'

const Spinner = (props) => {
  return <SpinnerM {...props} />
}

Spinner.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Changes the animation style of the spinner.@default true */
  animation: PropTypes.string,
  /** @default div */
  as: PropTypes.string,
  /** @default 'spinner' */
  bsPrefix: PropTypes.string,
  /** The visual color style of the spinner */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Component size variations. */
  size: PropTypes.oneOf(['sm']),
  /** An ARIA accessible role applied to the Menu component. This should generally be set to 'status' */
  role: PropTypes.string,
}

export default Spinner
