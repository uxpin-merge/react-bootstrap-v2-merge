import React from 'react'
import PropTypes from 'prop-types'
import { map as mapM } from 'react-bootstrap'

const map = (props) => {
  return <mapM {...props} />
}

map.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
}

export default map
