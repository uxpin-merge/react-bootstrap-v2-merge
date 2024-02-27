import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const TD = (props) => {
  return <td {...props} />
}

TD.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Specifies the number of columns a cell should span */
  colspan: PropTypes.number,

  /** Specifies one or more header cells a cell is related to */
  headers: PropTypes.string,

  /** Sets the number of rows a cell should span */
  rowspan: PropTypes.number,

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default TD
