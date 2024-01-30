import * as React from 'react';
import Item from '../Item';
import Input from '../../../Input/Input';

export default (
  <Item uxpId="item-1" label="Username"
    name="username"
    rules={[
      {
        required: true,
        message: 'Please input your username!',
      },
    ]}
  >
    <Input uxpId="input-1" />
  </Item>
);