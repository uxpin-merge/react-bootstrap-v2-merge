import React from 'react'
import Placeholder from '../Placeholder'
import PlaceholderButton from '../../PlaceholderButton/PlaceholderButton'

export default (
  <Placeholder uxpId="placeholder-1">
    <Placeholder uxpId="placeholder-2">
      <Placeholder xs={6} uxpId="placeholder-3" />
    </Placeholder>
    <Placeholder uxpId="placeholder-4">
      <Placeholder xs={7} uxpId="placeholder-5" />
      <Placeholder xs={4} uxpId="placeholder-6" />
      <Placeholder xs={4} uxpId="placeholder-7" />
      <Placeholder xs={6} uxpId="placeholder-8" />
      <Placeholder xs={8} uxpId="placeholder-9" />
    </Placeholder>
    <PlaceholderButton variant="primary" xs={6} uxpId="placeholder-button-1" />
  </Placeholder>
)
