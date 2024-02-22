import React from 'react'
import Dropdown from '../Dropdown'
import Toggle from '../../DropdownToggle/DropdownToggle'
import Menu from '../../DropdownMenu/DropdownMenu'
import Item from '../../DropdownItem/DropdownItem'

export default (
  <Dropdown uxpId="dropdown-1">
    <Toggle variant="success" id="dropdown-basic" uxpId="dropdown-toggle-1">
      Dropdown Button
    </Toggle>
    <Menu uxpId="dropdown-menu-1">
      <Item uxpId="dropdown-item-1">Action</Item>
      <Item uxpId="dropdown-item-2">Another action</Item>
      <Item uxpId="dropdown-item-3">Something else</Item>
    </Menu>
  </Dropdown>
)
