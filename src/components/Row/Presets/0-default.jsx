import React from 'react'
import Row from '../Row'
import Col from '../../Col/Col'
import Card from '../../Card/Card'

export default (
  <Row uxpId="row-1" className={'g-2'}>
    <Col uxpId="col-1" xs={3}>
      <Card body={true} uxpId="card-1">
        3 columns
      </Card>
    </Col>
    <Col uxpId="col-2" xs={9}>
      <Card body={true} uxpId="card-2">
        9 columns
      </Card>
    </Col>
  </Row>
)
