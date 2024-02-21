import React from 'react'
import PropTypes from 'prop-types'
import { CardGroup as CardGroupM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription TODO
 * @uxpinnamespace Card
 */
const CardGroup = (props) => {
  return <CardGroupM {...props} />
}

CardGroup.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
}

export default CardGroup
