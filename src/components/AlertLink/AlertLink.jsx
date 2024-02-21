import React from 'react'
import PropTypes from 'prop-types'
import { AlertLink as AlertLinkM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertLink
 * @uxpindescription Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
 * @uxpinnamespace Alert
 */

const Link = (props) => {
  return <AlertLinkM {...props} />
}

Link.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),
  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** The url to link to */
  href: PropTypes.string,
  as: PropTypes.string,
}

export default Link
