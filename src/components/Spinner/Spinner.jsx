import React from 'react'
import PropTypes from 'prop-types'
import { Spinner as SpinnerM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/spinner
 * @uxpindescription Spinners can be used to show the loading state in your projects.
 */
const Spinner = (props) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <SpinnerM {...props} />
    </div>
  )
}

Spinner.propTypes = {
  /** Content of the component */
  // children: PropTypes.node,
  /** Sets the color mode */
  // 'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Changes the animation style of the spinner.@default true */
  animation: PropTypes.oneOf(['border', 'grow', false]),
  /** @default div */
  as: PropTypes.string,
  /** @default 'spinner' */
  bsPrefix: PropTypes.string,
  /** The visual color style of the spinner */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Component size variations. */
  size: PropTypes.oneOf(['default', 'sm']),
  /** An ARIA accessible role applied to the Menu component. This should generally be set to 'status' */
  role: PropTypes.string,
}

export default Spinner
