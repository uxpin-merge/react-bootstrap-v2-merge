import React from 'react'
import Tabs from '../Tabs'
import Tab from '../../Tab/Tab'

export default (
  <Tabs defaultActiveKey="profile" id="tab-example" className="mb-3" uxpId="tabs-1">
    <Tab eventKey="home" title="Home" uxpId="tab-1">
      Tab content for Home
    </Tab>
    <Tab eventKey="profile" title="Profile" uxpId="tab-2">
      Tab content for Profile
    </Tab>
    <Tab eventKey="contact" title="Contact" uxpId="tab-3">
      Tab content for Contact
    </Tab>
  </Tabs>
)
