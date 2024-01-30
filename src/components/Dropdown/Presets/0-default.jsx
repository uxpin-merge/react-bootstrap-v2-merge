import * as React from 'react';
import Dropdown from '../Dropdown';
import Button from '../../Button/Button';

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
  }
];



export default (

  <Dropdown
    menu={{ items: items }}
    uxpId="dropdown-1"
  ><Button uxpId="button-1">Dropdown</Button></Dropdown>
);