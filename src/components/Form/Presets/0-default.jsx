import React from 'react'
import Form from '../Form'
import Button from '../../Button/Button'

export default (
  <Form uxpId="form-1">
    <Form.Group className="mb-3" controlId="formBasicEmail" uxpId="form-group-1">
      <Form.Label uxpId="form-label-1">Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" uxpId="form-control-1" />
      <Form.Text className="text-muted" uxpId="form-text-1">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword" uxpId="form-group-2">
      <Form.Label uxpId="form-label-2">Password</Form.Label>
      <Form.Control uxpId="form-control-2" type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" uxpId="form-group-3">
      <Form.Check type="checkbox" label="Check me out" uxpId="form-check-1" />
    </Form.Group>
    <Button variant="primary" type="submit" uxpId="form-button-1">
      Submit
    </Button>
  </Form>
)
