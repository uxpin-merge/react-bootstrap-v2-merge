import * as React from 'react';
import Steps from '../Steps';
import Item from '../Item/Item';

export default (
  <Steps uxpId="steps-1" current={1}  >
    <Item title="Finished" description="This is a description." uxpId="item-1" />
    <Item title="In Progress" description="This is a description." uxpId="item-2" />
    <Item title="Waiting" description="This is a description." uxpId="item-3" />
  </Steps>
);