import * as React from 'react';
import Popover from '../Popover';
import Button from '../../Button/Button';

export default (
  <Popover
    title="Hello!"
    content="I am a tooltip ..."
    uxpId="popover-1"
  >
    <Button
      type="primary"
      uxpId="button-1"
    >
      Hover me!
    </Button>
  </Popover>
);

