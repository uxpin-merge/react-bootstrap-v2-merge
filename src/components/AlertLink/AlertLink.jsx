import React from 'react'
import PropTypes from 'prop-types'
import { AlertLink as AlertLinkM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertLink
 * @uxpindescription TODO
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

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default Link
