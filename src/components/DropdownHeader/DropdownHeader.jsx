import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as DropdownM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/dropdowns
 * @uxpindescription Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
 * @uxpinnamespace Dropdown
 */
const Header = (props) => {
  return <DropdownM.Header {...props} />
}

Header.propTypes = {
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

  as: PropTypes.string,
  role: PropTypes.string,
}

export default Header
