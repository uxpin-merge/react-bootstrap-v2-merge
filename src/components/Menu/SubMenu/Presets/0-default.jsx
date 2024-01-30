import * as React from 'react';
import SubMenu from '../SubMenu';
import Item from '../../Item/Item';


export default (
  <SubMenu uxpId="sub-menu-1" key="sub-menu-1" title="Sub-Menu 1">
    <Item
      key="1"
      label="Menu Item 1"
      uxpId="item-1"
    >
      Menu Item 1
    </Item>
    <Item
      key="2"
      label="Menu Item 2"
      uxpId="item-2"
    >
      Menu Item 2
    </Item>
  </SubMenu>
);