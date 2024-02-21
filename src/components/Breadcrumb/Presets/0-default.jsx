import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Item from '../../BreadcrumbItem/BreadcrumbItem'

export default (
  <Breadcrumb uxpId="breadcrumb-1">
    <Item uxpId="breadcrumb-item-1">Home</Item>
    <Item uxpId="breadcrumb-item-2">Library</Item>
    <Item active={true} uxpId="breadcrumb-item-3">
      Data
    </Item>
  </Breadcrumb>
)
