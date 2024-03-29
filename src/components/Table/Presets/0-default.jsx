import React from 'react'
import Table from '../Table'
import HtmlTableHeading from '../../UXPinProvided/HtmlComponents/HtmlTableHeading/HtmlTableHeading'
import HtmlTableBody from '../../UXPinProvided/HtmlComponents/HtmlTableBody/HtmlTableBody'
import HtmlTableHead from '../../UXPinProvided/HtmlComponents/HtmlTableHead/HtmlTableHead'
import HtmlTableRow from '../../UXPinProvided/HtmlComponents/HtmlTableRow/HtmlTableRow'
import HtmlTableCell from '../../UXPinProvided/HtmlComponents/HtmlTableCell/HtmlTableCell'

export default (
  <Table hover uxpId="table-1">
    <HtmlTableHead uxpId="THead-1">
      <HtmlTableRow uxpId="TR-1">
        <HtmlTableHeading uxpId="TH-1">#</HtmlTableHeading>
        <HtmlTableHeading uxpId="TH-2">First Name</HtmlTableHeading>
        <HtmlTableHeading uxpId="TH-3">Last Name</HtmlTableHeading>
        <HtmlTableHeading uxpId="TH-4">Username</HtmlTableHeading>
      </HtmlTableRow>
    </HtmlTableHead>
    <HtmlTableBody uxpId="TBody-4">
      <HtmlTableRow uxpId="TR-2">
        <HtmlTableCell uxpId="TD-1">1</HtmlTableCell>
        <HtmlTableCell uxpId="TD-2">Mark</HtmlTableCell>
        <HtmlTableCell uxpId="TD-3">Otto</HtmlTableCell>
        <HtmlTableCell uxpId="TD-4">@mdo</HtmlTableCell>
      </HtmlTableRow>
      <HtmlTableRow uxpId="TR-3">
        <HtmlTableCell uxpId="TD-5">2</HtmlTableCell>
        <HtmlTableCell uxpId="TD-6">Jacob</HtmlTableCell>
        <HtmlTableCell uxpId="TD-7">THornton</HtmlTableCell>
        <HtmlTableCell uxpId="TD-8">@fat</HtmlTableCell>
      </HtmlTableRow>
      <HtmlTableRow uxpId="TR-4">
        <HtmlTableCell uxpId="TD-9">3</HtmlTableCell>
        <HtmlTableCell colSpan={2} uxpId="TD-10">
          Larry The Bird
        </HtmlTableCell>
        <HtmlTableCell uxpId="TD-11">@twitter</HtmlTableCell>
      </HtmlTableRow>
    </HtmlTableBody>
  </Table>
)
