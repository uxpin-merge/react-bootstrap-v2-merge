import React from 'react'
import PropTypes from 'prop-types'
import { Nav as NavM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/navs
 * @uxpindescription Documentation and examples for how to use Bootstrap’s included navigation components.
 * @uxpinnamespace Nav
 */
const Item = (props) => {
  return <NavM.Item {...props} />
}

Item.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default Item
