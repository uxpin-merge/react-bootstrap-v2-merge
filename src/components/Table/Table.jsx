import React from 'react'
import PropTypes from 'prop-types'
import { Table as TableM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/table
 * @uxpindescription
 */

const Table = (props) => {
  return <TableM {...props} />
}

Table.propTypes = {
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

  /** @default 'table' */
  bsPrefix: PropTypes.string,
  /** Adds zebra-striping to any table row within the `<tbody>`.Use `columns` to add zebra-striping to any table column. */
  striped: PropTypes.bool,
  /** Adds borders on all sides of the table and cells. */
  bordered: PropTypes.bool,
  /** Removes all borders on the table and cells, including table header. */
  borderless: PropTypes.bool,
  /** Enable a hover state on table rows within a `<tbody>`. */
  hover: PropTypes.bool,
  /** Make tables more compact by cutting cell padding in half by settingsize as `sm`. */
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  /** Invert the colors of the table — with light text on dark backgroundsby setting variant as `dark`. */
  variant: PropTypes.oneOf(['dark', 'light']),
  /** Responsive tables allow tables to be scrolled horizontally with ease.Across every breakpoint, use `responsive` for horizontallyscrolling tables. Responsive tables are wrapped automatically in a `div`.Use `responsive="sm"`, `responsive="md"`, `responsive="lg"`, or`responsive="xl"` as needed to create responsive tables up toa particular breakpoint. From that breakpoint and up, the table willbehave normally and not scroll horizontally. */
  responsive: PropTypes.string,
}

export default Table
