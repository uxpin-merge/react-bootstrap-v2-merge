import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb as BreadcrumbM } from 'react-bootstrap'
import Item from '../BreadcrumbItem/BreadcrumbItem'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Breadcrumb
 * @uxpindescription Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
 */

const Breadcrumb = (props) => {
  return <BreadcrumbM {...props} />
}

Breadcrumb.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Additional props passed as-is to the underlying `<ol>` element */
  listProps: PropTypes.object,
  /** ARIA label for the nav elementhttps://www.w3.org/TR/wai-aria-practices/#breadcrumb */
  label: PropTypes.string,
  as: PropTypes.string,
  /** @default 'breadcrumb' */
  bsPrefix: PropTypes.string,
}

Breadcrumb.Item = Item

export default Breadcrumb
