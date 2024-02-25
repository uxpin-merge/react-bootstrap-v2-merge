import React from 'react'
import Toast from '../Toast'
import ToastHeader from '../../ToastHeader/ToastHeader'
import ToastBody from '../../ToastBody/ToastBody'

export default (
  <Toast uxpId="toast-1" show>
    <ToastHeader uxpId="toast-header-1">Toast Header</ToastHeader>
    <ToastBody uxpId="toast-body-1">Hello, world! This is a toast message.</ToastBody>
  </Toast>
)
