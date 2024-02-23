import React from 'react'
import Navbar from '../Navbar'
import Container from '../../Container/Container'
import Nav from '../../Nav/Nav'
import NavDropdown from '../../NavDropdown/NavDropdown'
import Dropdown from '../../Dropdown/Dropdown'

export default (
  <Navbar bg="light" uxpId="navbar-1">
    <Container uxpId="container-1">
      <Navbar.Brand href="#home" uxpId="navbar-brand-1">
        Navbar
      </Navbar.Brand>
      <Nav variant="pills" uxpId="nav-1">
        <Nav.Item uxpId="nav-item-1">
          <Nav.Link eventKey="1" uxpId="nav-link-1">
            Nav Link 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item uxpId="nav-item-2">
          <Nav.Link eventKey="2" title="Item" uxpId="nav-link-2">
            Nav Link 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item uxpId="nav-item-3">
          <Nav.Link eventKey="3" uxpId="nav-link-3">
            Nav Link 3
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown" uxpId="nav-dropdown-1">
          <Dropdown.Header uxpId="nav-dropdown-header-1">Dropdown Header</Dropdown.Header>
          <Dropdown.Item uxpId="nav-dropdown-item-1">Dropdown Link 1</Dropdown.Item>
          <Dropdown.Divider uxpId="nav-dropdown-divider-1" />
          <Dropdown.Item uxpId="nav-dropdown-item-2">Dropdown Link 2</Dropdown.Item>
          <Dropdown.Item uxpId="nav-dropdown-item-3">Dropdown Link 3</Dropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
)
