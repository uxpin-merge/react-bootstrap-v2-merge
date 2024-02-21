import React from 'react'
import PropTypes from 'prop-types'
import { Pagination as PaginationM } from 'react-bootstrap'

const Pagination = (props) => {
  return <PaginationM {...props} />
}

Pagination.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'pagination' */
  bsPrefix: PropTypes.string,
  /** Sets the size of all PageItems. */
  size: PropTypes.string,
}

export default Pagination
