import React from 'react'
import PropTypes from 'prop-types'
import { OffcanvasBody as OffcanvasBodyM } from 'react-bootstrap'

const OffcanvasBody = (props) => {
  return <OffcanvasBodyM {...props} />
}

OffcanvasBody.propTypes = {
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

export default OffcanvasBody
