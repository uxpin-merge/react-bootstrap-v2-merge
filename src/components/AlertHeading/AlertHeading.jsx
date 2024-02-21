import React from 'react'
import PropTypes from 'prop-types'
import { AlertHeading as AlertHeadingM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertHeading
 * @uxpindescription TODO
 * @uxpinnamespace Alert
 */

const Heading = (props) => {
  return <AlertHeadingM {...props} />
}

Heading.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default Heading
