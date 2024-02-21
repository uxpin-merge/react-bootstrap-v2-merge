import React from 'react'
import PropTypes from 'prop-types'
import { DropdownItemText as DropdownItemTextM } from 'react-bootstrap'

const DropdownItemText = (props) => {
  return <DropdownItemTextM {...props} />
}

DropdownItemText.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default DropdownItemText
