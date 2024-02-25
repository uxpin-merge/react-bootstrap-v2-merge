import React from 'react'
import Placeholder from '../Placeholder'
import PlaceholderButton from '../../PlaceholderButton/PlaceholderButton'

export default (
  <Placeholder uxpId="placeholder-1" xs={12} animation="glow">
    <Placeholder uxpId="placeholder-2" xs={12} />
    <PlaceholderButton variant="primary" xs={5} className="mt-3" uxpId="placeholder-button-1" />
  </Placeholder>
)
