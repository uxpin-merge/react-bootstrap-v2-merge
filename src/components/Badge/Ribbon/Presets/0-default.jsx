import * as React from 'react';
import Ribbon from '../Ribbon';
import Card from '../../../Card/Card';

export default (
  <Ribbon
    text="New!"
    uxpId="ribbon-1"
  >
    <Card
      title="Card Title"
      size="small"
      uxpId="card-1"
    >
      Card content here
    </Card>
  </Ribbon>
);