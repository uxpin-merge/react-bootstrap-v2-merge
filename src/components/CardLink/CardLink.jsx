import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription TODO
 * @uxpinnamespace Card
 */
const Link = (props) => {
  return <CardM.Link {...props} />
}

Link.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
}

export default Link
