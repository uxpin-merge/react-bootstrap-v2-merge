import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription TODO
 * @uxpinnamespace Card
 */
const Subtitle = (props) => {
  return <CardM.Subtitle {...props} />
}

Subtitle.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
}

export default Subtitle
