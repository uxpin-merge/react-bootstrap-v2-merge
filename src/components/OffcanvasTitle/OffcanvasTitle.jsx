import React from 'react'
import PropTypes from 'prop-types'
import { OffcanvasTitle as OffcanvasTitleM } from 'react-bootstrap'

const OffcanvasTitle = (props) => {
  return <OffcanvasTitleM {...props} />
}

OffcanvasTitle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
}

export default OffcanvasTitle
