import React from 'react'
import Offcanvas from '../Offcanvas'
import OffcanvasHeader from '../../OffcanvasHeader/OffcanvasHeader'
import OffcanvasTitle from '../../OffcanvasTitle/OffcanvasTitle'
import OffcanvasBody from '../../OffcanvasBody/OffcanvasBody'

export default (
  <Offcanvas show uxpId="offcanvas-1">
    <OffcanvasHeader closeButton uxpId="offcanvas-header-1">
      <OffcanvasTitle uxpId="offcanvas-title-1" as="h5">
        Offcanvas Title
      </OffcanvasTitle>
    </OffcanvasHeader>
    <OffcanvasBody uxpId="offcanvas-body-1">
      Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
    </OffcanvasBody>
  </Offcanvas>
)
