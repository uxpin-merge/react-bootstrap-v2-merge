import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as DropdownM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/dropdowns
 * @uxpindescription Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
 * @uxpinnamespace Dropdown
 */
const ItemText = (props) => {
  return <DropdownM.ItemText {...props} />
}

ItemText.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default ItemText
