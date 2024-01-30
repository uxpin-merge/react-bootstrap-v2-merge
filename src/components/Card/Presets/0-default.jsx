import * as React from 'react';
import Card from '../Card';
import Typography from '../../Typography/Typography';

export default (

  <Card
    uxpId="card-1"
    title="Basic Card"
    extra={
      <Typography.Link uxpId="link-1">
        More ...
      </Typography.Link>
    }
  >
    Card content here
  </Card>
);