import * as React from 'react';
import Row from '../Row';
import Col from '../../Col/Col';
import Button from '../../Button/Button';

export default (
  <Row uxpId="row-1"
    gutter={[16, 30]}
  >
    <Col
      xs={24}
      sm={12}
      uxpId="col-1"
    >
      <Button
        block={true}
        uxpId="button-1"
      >
        xs:12, sm:6
      </Button>
    </Col>
    <Col
      xs={24}
      sm={12}
      uxpId="col-2"
    >
      <Button
        block={true}
        uxpId="button-2"
      >
        xs:12, sm:6
      </Button>
    </Col>
  </Row>


);