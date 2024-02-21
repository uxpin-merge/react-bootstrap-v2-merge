import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription TODO
 * @uxpinnamespace Card
 */

const Img = (props) => {
  return <CardM.Img {...props} />
}

Img.propTypes = {
  children: PropTypes.node,
  /** @default 'card-img' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Defines image position insidethe card. */
  variant: PropTypes.string,
}

export default Img
