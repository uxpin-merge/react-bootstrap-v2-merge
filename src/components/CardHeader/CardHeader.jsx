import React from 'react'
import PropTypes from 'prop-types'
import { Card as CardM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
 * @uxpindescription TODO
 * @uxpinnamespace Card
 */
const Header = (props) => {
  return <CardM.Header {...props} />
}

Header.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  /** @default 'card-header' */
  bsPrefix: PropTypes.string,
}

export default Header
