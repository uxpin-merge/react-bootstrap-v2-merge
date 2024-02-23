import React from 'react'
import Modal from '../Modal'
import Button from '../../Button/Button'

export default (
  <Modal uxpId="modal-1" show centered>
    <Modal.Header uxpId="modal-header.1" closeButton>
      <Modal.Title uxpId="modal-title-1">Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body uxpId="modal-body-1">Woohoo, you are reading this text in a modal!</Modal.Body>
    <Modal.Footer uxpId="modal-footer-1">
      <Button variant="secondary" uxpId="modal-button-1">
        Close
      </Button>
      <Button variant="primary" uxpId="modal-button-2">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
)
