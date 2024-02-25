import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip as TooltipM } from 'react-bootstrap'

const Tooltip = (props) => {
  return <TooltipM {...props} />
}

Tooltip.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'tooltip' */
  bsPrefix: PropTypes.string,
  // as: PropTypes.string,
  /** Sets the direction the Tooltip is positioned towards.> This is generally provided by the `Overlay` component positioning the tooltip */
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
  /** An Overlay injected set of props for positioning the tooltip arrow.> This is generally provided by the `Overlay` component positioning the tooltip@type {{ ref: ReactRef, style: Object }}
   * @uxpinignoreprop
   */
  arrowProps: PropTypes.shape,
  /** @private */
  show: PropTypes.string,
  /** @private
   * @uxpinignoreprop
   */
  popper: PropTypes.object,
  /** Whether or not Popper has done its initial measurement and positioning.
   * @uxpinignoreprop
   */
  hasDoneInitialMeasure: PropTypes.bool,
  /** An html id attribute, necessary for accessibility@type {string}@required */
  id: PropTypes.string,
}

export default Tooltip
