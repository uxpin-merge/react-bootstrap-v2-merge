import React from 'react'
import PropTypes from 'prop-types'
import { NavbarText as NavbarTextM } from 'react-bootstrap'

const NavbarText = (props) => {
  return <NavbarTextM {...props} />
}

NavbarText.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default NavbarText
