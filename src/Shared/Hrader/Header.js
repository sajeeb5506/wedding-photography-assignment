import React from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../img/logo.jpg'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand Link to="" className='text-primary text-large'>Wedding photography</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
  
  
    </Nav>
    <Nav>
      <Nav.Link  href="#deets">Login</Nav.Link>
      <Nav.Link  href="#memes">
      Regester
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;