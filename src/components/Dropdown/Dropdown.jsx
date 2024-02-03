import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownM } from 'react-bootstrap';

const Dropdown = (props) => {
  return <DropdownM {...props} />;
};

Dropdown.propTypes = {
  children: PropTypes.node,
/** @default 'dropdown' */
  bsPrefix: PropTypes.string,
  /** Determines the direction and location of the Menu in relation to it's Toggle. */
  drop: PropTypes.string,
  as: PropTypes.string,
  /** Aligns the dropdown menu to the specified side of the Dropdown toggle. You canalso align the menu responsively for breakpoints starting at `sm` and up.The alignment direction will affect the specified breakpoint or larger.*Note: Using responsive alignment will disable Popper usage for positioning.*@type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} } */
  align: PropTypes.string,
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
};

export default Dropdown;