import React from 'react'
import Row from '../Row'
import Col from '../../Col/Col'
import Card from '../../Card/Card'

export default (
  <Row uxpId="row-1" className={'g-2'}>
    <Col uxpId="col-1">
      <Card body={true} uxpId="card-1">
        1 of 3
      </Card>
    </Col>
    <Col uxpId="col-2">
      <Card body={true} uxpId="card-2">
        2 of 3
      </Card>
    </Col>
    <Col uxpId="col-3">
      <Card body={true} uxpId="card-3">
        3 of 3
      </Card>
    </Col>
  </Row>
)
