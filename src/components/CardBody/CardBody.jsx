import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
 * @uxpinnamespace Card
 */
const Body = (props) => {
  return <CardM.Body {...props} />
}

Body.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
}

export default Body
