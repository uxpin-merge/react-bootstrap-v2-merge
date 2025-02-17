import React from 'react'
import PropTypes from 'prop-types'
import { PopoverHeader as PopoverHeaderM } from 'react-bootstrap'

const PopoverHeader = (props) => {
  return <PopoverHeaderM {...props} />
}

PopoverHeader.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default PopoverHeader
