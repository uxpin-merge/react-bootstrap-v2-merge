import * as React from 'react';
import Transfer from '../Transfer';
const data = [
  {
    key: "Item-1",
    title: "Item 1",
  },
  {
    key: "Item-2",
    title: "Item 2",
  },
  {
    key: "Item-3",
    title: "Item 3",
  },
  {
    key: "Item-4",
    title: "Item 4",
  },
  {
    key: "Item-5",
    title: "Item 5",
  }

];
export default (
  <Transfer uxpId="transfer-1" dataSource={data}
  />
);