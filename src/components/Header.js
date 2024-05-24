import React from 'react';
import './Header.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#">IndigoLearn</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Buy Courses</Nav.Link>
        <Nav.Link href="#">Buy Books</Nav.Link>
        <Nav.Link href="#">Programs</Nav.Link>
        <Nav.Link href="#">Free Resources</Nav.Link>
      </Nav>
      <Button variant="outline-light">Log In/Sign Up</Button>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
