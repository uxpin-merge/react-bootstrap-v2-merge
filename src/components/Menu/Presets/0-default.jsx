import * as React from 'react';
import Menu from '../Menu';
import Item from '../Item/Item';
import SubMenu from '../SubMenu/SubMenu';

export default (
  <Menu uxpId="menu-1" mode="inline">
    <Item
      key="item-1"
      label="Menu Item 1"
      uxpId="item-1"
    >
      Menu Item 1
    </Item>
    <Item
      key="item-2"
      label="Menu Item 2"
      uxpId="item-2"
    >
      Menu Item 2
    </Item>
    <SubMenu
      key="Submenu-1"
      label="Submenu"
      title="Sub-Menu 1"
      uxpId="submenu-1"
    >
      <Item
        key="submenu-item-1"
        label="Submenu Menu Item 1"
        uxpId="submenu-item-1"
      >
        SubMenu Item 1
      </Item>
    </SubMenu>
  </Menu>
);