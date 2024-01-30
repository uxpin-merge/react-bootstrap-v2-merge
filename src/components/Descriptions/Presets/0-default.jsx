import * as React from 'react';
import Descriptions from '../Descriptions';
import Item from '../Item/Item';
import Badge from '../../Badge/Badge';

export default (
  <Descriptions
    title="User Info"
    column={1}
    uxpId="descriptions-1"
  >
    <Item
      label="UserName"
      uxpId="item-1"
    >
      JDoe
    </Item>
    <Item
      label="Name"
      uxpId="item-2"
    >
      John Doe
    </Item>
    <Item
      label="Account Status"
      uxpId="item-3"
    >
      <Badge
        status="processing"
        text="Active"
        uxpId="badge-1"
      />
    </Item>
  </Descriptions>
);