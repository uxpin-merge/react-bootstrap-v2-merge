import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as DropdownM } from 'react-bootstrap'
import Item from '../DropdownItem/DropdownItem'
import Button from '../DropdownButton/DropdownButton'
import Divider from '../DropdownDivider/DropdownDivider'
import Header from '../DropdownHeader/DropdownHeader'
import ItemText from '../DropdownItemText/DropdownItemText'
import Menu from '../DropdownMenu/DropdownMenu'
import Toggle from '../DropdownToggle/DropdownToggle'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/dropdowns
 * @uxpindescription Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
 */
const Dropdown = (props) => {
  return <DropdownM {...props} />
}

Dropdown.Item = Item
Dropdown.Button = Button
Dropdown.Divider = Divider
Dropdown.Header = Header
Dropdown.ItemText = ItemText
Dropdown.Menu = Menu
Dropdown.Toggle = Toggle

Dropdown.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'dropdown' */
  bsPrefix: PropTypes.string,

  /** Determines the direction and location of the Menu in relation to it's Toggle. */
  drop: PropTypes.oneOf(['up', 'up-centered', 'down', 'down-centered', 'start', 'end']),
  as: PropTypes.string,
  /** Aligns the dropdown menu to the specified side of the Dropdown toggle. You canalso align the menu responsively for breakpoints starting at `sm` and up.The alignment direction will affect the specified breakpoint or larger.*Note: Using responsive alignment will disable Popper usage for positioning.*@type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} } */
  align: PropTypes.oneOf(['start', 'end']),
  /** Whether or not the Dropdown is visible.@controllable onToggle */
  show: PropTypes.bool,
  /** A callback fired when the Dropdown wishes to change visibility. Called with the requested`show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`. jsfunction(  nextShow: boolean,  meta: ToggleMetadata,): void @controllable show */
  onToggle: PropTypes.func,
  /** A callback fired when a menu item is selected. js(eventKey: any, event: Object) => any */
  onSelect: PropTypes.func,
  /** Controls the focus behavior for when the Dropdown is opened. Set to`true` to always focus the first menu item, `keyboard` to focus only whennavigating via the keyboard, or `false` to disable completelyThe Default behavior is `false` **unless** the Menu has a `role="menu"`where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton). */
  focusFirstItemOnShow: PropTypes.string,
  /** @private */
  navbar: PropTypes.bool,
  /** Controls the auto close behaviour of the dropdown when clicking outside ofthe button or the list. */
  autoClose: PropTypes.string,
}

export default Dropdown
