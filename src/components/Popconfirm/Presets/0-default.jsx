import * as React from 'react';
import Popconfirm from '../Popconfirm';
import Button from '../../Button/Button';

export default (
  <Popconfirm
    uxpId="popconfirm-1"
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No">
    <Button danger
      uxpId="button-1"
    >Delete</Button>
  </Popconfirm>

);