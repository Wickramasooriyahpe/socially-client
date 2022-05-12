import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./landingNav.css";
const LandingNavibar = () => {
  return (
    
    <> 
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand class="Landing-page-logo-image"href="#home">Socially </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="#features">About Us</Nav.Link>
        <Nav.Link href="/adv">Advertiser</Nav.Link>
        <Nav.Link href="#pricing">Publisher</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  </>
  );
};

export default LandingNavibar;