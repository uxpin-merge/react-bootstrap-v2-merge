import React from 'react'
import PropTypes from 'prop-types'
import { PageItem as PageItemM } from 'react-bootstrap'

const PageItem = (props) => {
  return <PageItemM {...props} />
}

PageItem.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Disables the PageItem */
  disabled: PropTypes.bool,
  /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */
  active: PropTypes.bool,
  /** An accessible label indicating the active state. */
  activeLabel: PropTypes.string,
  /** The HTML href attribute for the `PageItem`. */
  href: PropTypes.string,
  /** custom style for the inner component of the PageItem */
  linkStyle: PropTypes.object,
  /** custom className for the inner component of the PageItem */
  linkClassName: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
}

export default PageItem
