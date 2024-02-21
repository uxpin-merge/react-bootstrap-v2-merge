import React from 'react'
import PropTypes from 'prop-types'
import { Alert as AlertM } from 'react-bootstrap'
import AlertHeading from '../AlertHeading/AlertHeading'
import AlertLink from '../AlertLink/AlertLink'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Alert
 * @uxpindescription Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 */

const Alert = (props) => {
  return <AlertM {...props} />
}

Alert.Heading = AlertHeading
Alert.Link = AlertLink

Alert.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** @default 'alert' */
  bsPrefix: PropTypes.string,
  /** The Alert visual variant@type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'} */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  /** Renders a properly aligned dismiss button, as well asadding extra horizontal padding to the Alert. */
  dismissible: PropTypes.bool,
  /** Controls the visual state of the Alert.@controllable onClose */
  show: PropTypes.bool,
  /** Callback fired when alert is closed.@controllable show */
  onClose: PropTypes.func,
  /** Sets the text for alert close button. */
  closeLabel: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** Animate the alert dismissal. Defaults to using `<Fade>` animation or use`false` to disable. A custom `react-transition-group` Transition can alsobe provided. */
  transition: PropTypes.string,
}

export default Alert
