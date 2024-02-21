import React from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbItem as BreadcrumbItemM } from 'react-bootstrap'

const BreadcrumbItem = (props) => {
  return <BreadcrumbItemM {...props} />
}

BreadcrumbItem.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

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

export default BreadcrumbItem
