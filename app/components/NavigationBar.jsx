"use client";

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Puella</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#freaky-friday">Freaky Friday</Nav.Link>
            <Nav.Link href="#new-arrivals">New Arrivals</Nav.Link>
            <Nav.Link href="#bestsellers">Bestsellers</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#korean-pants">Korean Pants</NavDropdown.Item>
              <NavDropdown.Item href="#jeans">Jeans</NavDropdown.Item>
              <NavDropdown.Item href="#curve">Shorts</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#restocked">Restocked</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
