import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
 * @uxpinnamespace Card
 */
const Subtitle = (props) => {
  return <CardM.Subtitle {...props} />
}

Subtitle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default Subtitle
