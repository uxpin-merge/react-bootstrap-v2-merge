import * as React from 'react';
import Group from '../Group';
import Radio from '../../Radio';

export default (
  <Group defaultValue={"Apple"} name="radiogroup" uxpId="radio-group-1">
    <Radio
      uxpId="radio-1"
      value="Apple"
    >
      Apple
    </Radio>
    <Radio
      uxpId="radio-2"
      value="Orange"
    >
      Orange
    </Radio>
    <Radio
      uxpId="radio-3"
      value="Pear"
    >
      Pear
    </Radio>

  </Group>
);