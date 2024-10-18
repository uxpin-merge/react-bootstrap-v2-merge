import React from 'react'
import PropTypes from 'prop-types'
import { Badge as BadgeM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/badge
 * @uxpindescription Documentation and examples for badges, our small count and labeling component.
 */

const Badge = (props) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <BadgeM {...props} />
    </div>
  )
}

Badge.propTypes = {
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

  /** The visual style of the badge */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /** Add the `pill` modifier to make badges more rounded withsome additional horizontal padding */
  pill: PropTypes.bool,
  /** @default span */
  as: PropTypes.string,
  /** @default 'badge' */
  bsPrefix: PropTypes.string,
  /** Sets badge text color */
  text: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
}

export default Badge
