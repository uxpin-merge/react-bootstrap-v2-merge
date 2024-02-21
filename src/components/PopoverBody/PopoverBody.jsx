import React from 'react'
import PropTypes from 'prop-types'
import { PopoverBody as PopoverBodyM } from 'react-bootstrap'

const PopoverBody = (props) => {
  return <PopoverBodyM {...props} />
}

PopoverBody.propTypes = {
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

export default PopoverBody
