import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb as BreadcrumbM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Breadcrumb
 * @uxpindescription Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
 * @uxpinnamespace Breadcrumb
 */

const Item = (props) => {
  return <BreadcrumbM.Item {...props} />
}

Item.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Adds a visual "active" state to a BreadcrumbItem and disables the link. */
  active: PropTypes.bool,
  as: PropTypes.string,
  /** You can use a custom element type for this component's inner link. */
  linkAs: PropTypes.string,
  /** Additional props passed as-is to the underlying link for non-active items. */
  linkProps: PropTypes.object,
  /** @default 'breadcrumb-item' */
  bsPrefix: PropTypes.string,
  /** `href` attribute for the inner `a` element */
  href: PropTypes.string,
  /** `title` attribute for the inner `a` element */
  title: PropTypes.node,
  /** `target` attribute for the inner `a` element */
  target: PropTypes.string,
}

export default Item
