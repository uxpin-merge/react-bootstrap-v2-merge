import React from 'react'
import PropTypes from 'prop-types'
import { DropdownItem as DropdownItemM } from 'react-bootstrap'

const DropdownItem = (props) => {
  return <DropdownItemM {...props} />
}

DropdownItem.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  /** Disable the menu item, making it unselectable. */
  disabled: PropTypes.bool,
  as: PropTypes.string,
  /** @default 'dropdown-item' */
  bsPrefix: PropTypes.string,
  /** Highlight the menu item as active. */
  active: PropTypes.bool,
  /** Value passed to the `onSelect` handler, useful for identifying the selected menu item. */
  eventKey: PropTypes.string,
  /** HTML `href` attribute corresponding to `a.href`. */
  href: PropTypes.string,
  /** Callback fired when the menu item is clicked. */
  onClick: PropTypes.func,
}

export default DropdownItem
