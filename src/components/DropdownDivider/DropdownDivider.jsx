import React from 'react'
import PropTypes from 'prop-types'
import { DropdownDivider as DropdownDividerM } from 'react-bootstrap'

const DropdownDivider = (props) => {
  return <DropdownDividerM {...props} />
}

DropdownDivider.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  role: PropTypes.string,
}

export default DropdownDivider
