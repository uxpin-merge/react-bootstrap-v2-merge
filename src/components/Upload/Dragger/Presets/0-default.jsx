import * as React from 'react';
import Dragger from '../Dragger';
import Typography from '../../../Typography/Typography';
import Flex from '../../../Flex/Flex';
import Icon from '../../../Icon/Icon';

export default (
  <Dragger uxpId="dragger-1" height={200}>

    <Flex
      gutter={30}
      gap="30px"
      vertical={true}
      align="center"
      style={{ padding: '10px' }}
      uxpId="flex-1"
    >
      <Icon
        icon="FileAddTwoTone"
        style={{ fontSize: '70px', color: '' }}
        size="large"
        twoToneColor="#1677ff"
        uxpId="icon-1"
      />
      <Typography.Text type="secondary" uxpId="text-1">
        Click or drag file to this area to upload
      </Typography.Text>
    </Flex>
  </Dragger>

);