import * as React from 'react';
import Button from '../Button';
import Icon from '../../../Icon/Icon';

const items = [
  {
    key: '1',
    label: "1st menu item"
  },
  {
    key: '2',
    label: "2nd menu item"
  },
  {
    key: '3',
    label: "Danger menu item",
    danger: true
  },
  {
    key: '4',
    label: "With icon",
    icon: <Icon icon="AntDesignOutlined" uxpId="icon-1" />
  }
];

export default (
  <Button uxpId="item-1" label="drop-down-button-1" menu={{ items: items }}>Dropdown Button</Button>
);