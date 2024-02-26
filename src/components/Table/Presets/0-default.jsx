import React from 'react'
import Table from '../Table'
import THead from '../../THead/THead'
import TR from '../../TR/TR'
import TH from '../../TH/TH'
import TD from '../../TD/TD'
import TBody from '../../TBody/TBody'

export default (
  <Table striped hover bordered uxpId="table-1">
    <THead uxpId="THead-1">
      <TR uxpId="TR-1">
        <TH uxpId="TH-1">#</TH>
        <TH uxpId="TH-2">First Name</TH>
        <TH uxpId="TH-3">Last Name</TH>
        <TH uxpId="TH-4">Username</TH>
      </TR>
    </THead>
    <TBody uxpId="TBody-4">
      <TR uxpId="TR-2">
        <TD uxpId="TD-1">1</TD>
        <TD uxpId="TD-2">Mark</TD>
        <TD uxpId="TD-3">Otto</TD>
        <TD uxpId="TD-4">@mdo</TD>
      </TR>
      <TR uxpId="TR-3">
        <TD uxpId="TD-5">2</TD>
        <TD uxpId="TD-6">Jacob</TD>
        <TD uxpId="TD-7">THornton</TD>
        <TD uxpId="TD-8">@fat</TD>
      </TR>
      <TR uxpId="TR-4">
        <TD uxpId="TD-9">3</TD>
        <TD colSpan={2} uxpId="TD-10">
          Larry The Bird
        </TD>
        <TD uxpId="TD-11">@twitter</TD>
      </TR>
    </TBody>
  </Table>
)
