import React from 'react';

import { Container, Nav, Navbar,  } from 'react-bootstrap';
import './Header.css'


import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

const handelSignout=()=>{
  signOut(auth);
}
    return (
        <header className="sticky-top">
       <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/" className='main-logo'>WEDDING PHOTOGRAPHY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className='link-btn' as={Link} to="/">Home</Nav.Link>
      <Nav.Link  className='link-btn' as={Link} to="/about">About</Nav.Link>
      <Nav.Link className='link-btn' as={Link} to="/services">Services</Nav.Link>
      <Nav.Link className='link-btn' as={Link} to="/blog">Blogs</Nav.Link>
  
  
    </Nav>
    <Nav>
      {
        user?
          //  <Nav.Link  as={Link} to="/login">Sign Out</Nav.Link>
          <button className='btn1 ' onClick={handelSignout}>Sign Out</button>
        :
        // <Nav.Link  as={Link} to="/regester">
        // Sign Up
        // </Nav.Link>
           <Nav.Link className='link-btn' as={Link} to="/login">Login</Nav.Link>
      }
      
    

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;