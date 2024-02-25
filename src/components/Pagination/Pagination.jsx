import React from 'react'
import PropTypes from 'prop-types'
import { Pagination as PaginationM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/pagination
 * @uxpindescription A set of presentational components for building pagination UI.
 */
const Pagination = (props) => {
  return <PaginationM {...props} />
}

Pagination.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'pagination' */
  bsPrefix: PropTypes.string,
  /** Sets the size of all PageItems. */
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
}

export default Pagination
