import * as React from 'react';
import Group from '../Group';
import Checkbox from '../../Checkbox';

export default (
  <Group defaultValue={['Apple']} uxpId="checkbox-group-1">
    <Checkbox
      uxpId="checkbox-1"
      value="Apple"
    >
      Apple
    </Checkbox>
    <Checkbox
      uxpId="checkbox-2"
      value="Orange"
    >
      Orange
    </Checkbox>
    <Checkbox
      uxpId="checkbox-3"
      value="Pear"
    >
      Pear
    </Checkbox>

  </Group>
);