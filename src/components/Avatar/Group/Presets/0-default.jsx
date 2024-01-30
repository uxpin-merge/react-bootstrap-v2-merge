import * as React from 'react';
import Avatar from '../../Avatar';
import Icon from '../../../Icon/Icon';
import Group from '../Group';

export default (
  <Group
    maxCount={2}
    size={"default"}
    maxStyle={{
      backgroundColor: '#c6c6c6',
    }}

    uxpId="avatar-group-1"

  >
    <Avatar
      uxpId="avatar-1"
      style={{
        backgroundColor: '#87d068',
      }}
      icon={
        <Icon
          uxpId="icon-2"
          icon="UserOutlined"
        />
      }
    />
    <Avatar
      uxpId="avatar-2"
      style={{
        backgroundColor: '#f56a00',
      }}

    >JB</Avatar>
    <Avatar
      uxpId="avatar-3"
      style={{
        backgroundColor: '#1677ff',
      }}

    >K</Avatar>
  </Group>
);