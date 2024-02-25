import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
 * @uxpinnamespace Card
 */

const Img = (props) => {
  return <CardM.Img {...props} />
}

Img.propTypes = {
  src: PropTypes.string,
  /** @default 'card-img' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Defines image position insidethe card. */
  variant: PropTypes.oneOf(['top', 'bottom']),
}

export default Img
