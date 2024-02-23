import React from 'react'
import FormGroup from '../FormGroup'
import Form from '../../Form/Form'

export default (
  <FormGroup className="mb-3" controlId="formBasicEmail" uxpId="form-group-1">
    <Form.Label uxpId="form-label-1">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" uxpId="form-control-1" />
    <Form.Text className="text-muted" uxpId="form-text-1">
      We'll never share your email with anyone else.
    </Form.Text>
  </FormGroup>
)
