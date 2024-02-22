import React from 'react'
import SplitButton from '../SplitButton'
import Dropdown from '../../Dropdown/Dropdown'

export default (
  <SplitButton uxpId="splitbutton-1" id="dropdown-split-button" title="Dropdown SplitButton">
    <Dropdown.Header uxpId="dropdownheader-1">Dropdown Header</Dropdown.Header>
    <Dropdown.Item uxpId="dropdown-item-1">Action</Dropdown.Item>
    <Dropdown.Item uxpId="dropdown-item-2">Another action</Dropdown.Item>
    <Dropdown.Divider uxpId="dropdown-divider-1" />
    <Dropdown.Item uxpId="dropdown-item-3">Something else</Dropdown.Item>
  </SplitButton>
)
