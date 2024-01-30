import * as React from 'react';
import Form from '../Form';
import Item from '../Item/Item';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

export default (
  <Form
    uxpId="form-1"
  >
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
    <Item
      uxpId="item-2"
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    ><Input uxpId="input-2" /></Item>
    <Item
      uxpId="item-3"
    >
      <Button type="primary" htmlType="submit" uxpId="button-1">
        Submit
      </Button>
    </Item>

  </Form>
);