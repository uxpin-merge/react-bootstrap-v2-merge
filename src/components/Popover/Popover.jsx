import React from 'react'
import PropTypes from 'prop-types'
import { Popover as PopoverM } from 'react-bootstrap'

const Popover = (props) => {
  return <PopoverM {...props} />
}

Popover.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Sets the direction the Popover is positioned towards.> This is generally provided by the `Overlay` component positioning the popover */
  placement: PropTypes.oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ]),
  /** @default 'popover' */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for accessibility@type {string}@required */
  id: PropTypes.string,
  /** An Overlay injected set of props for positioning the popover arrow.> This is generally provided by the `Overlay` component positioning the popover */
  arrowProps: PropTypes.shape,
  /** When this prop is set, it creates a Popover with a Popover.Body insidepassing the children directly to it */
  body: PropTypes.bool,
  /** Whether or not Popper has done its initial measurement and positioning. */
  hasDoneInitialMeasure: PropTypes.bool,
  /** @private */
  popper: PropTypes.object,
  /** @private */
  show: PropTypes.bool,
}

export default Popover
