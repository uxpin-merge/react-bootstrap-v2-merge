import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/table
 * @uxpinhtmloutput
 */

const TH = (props) => {
  return <th {...props} />
}

TH.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  // /** Add Bootstrap classes */
  className: PropTypes.object,

  // /** Override styles */
  style: PropTypes.object,

  /** Specifies an abbreviated version of the content in a header cell */
  abbr: PropTypes.string,

  /** Specifies the number of columns a header cell should span */
  colspan: PropTypes.number,

  /** Specifies one or more header cells a cell is related to */
  headers: PropTypes.string,

  /** Specifies the number of rows a header cell should span */
  rowspan: PropTypes.number,

  /** Specifies whether a header cell is a header for a column, row, or group of columns or rows */
  scope: PropTypes.oneOf(['col', 'colgroup', 'row', 'rowgroup']),

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default TH
