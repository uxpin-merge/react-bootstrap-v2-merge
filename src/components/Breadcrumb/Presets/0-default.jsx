import * as React from 'react';
import Breadcrumb from '../Breadcrumb';
import Item from '../Item/Item';

export default (
  <Breadcrumb
    separator="/"
    uxpId="breadcrumb-1"
  >
    <Item uxpId="item-1">
      Home
    </Item >
    <Item uxpId="item-2">
      Application Center
    </Item>
    <Item uxpId="item-3">
      Application List
    </Item>
    <Item uxpId="item-4">
      Application Name
    </Item>
  </Breadcrumb>
);