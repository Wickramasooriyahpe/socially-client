import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./landingNav.css";
const LandingNavibar = () => {
  return (
    
    <> 
    <Navbar bg="dark" variant="dark" className="nav-wrapper">
      <Container>
      <Navbar.Brand className="Landing-page-logo-image"href="#home">
      <img
      src="socially2.jpg"
      width="200px"
      height="50px"
      className="socially-logo"
      alt="socially"
    />
      </Navbar.Brand>
        <Nav className="container-fluid">
        <Nav.Link href="/home" className="landing-nav-text">Home</Nav.Link>
        <Nav.Link href="#features" className="landing-nav-text">About Us</Nav.Link>
        <Nav.Link href="/adv" className="landing-nav-text">Advertiser</Nav.Link>
        <Nav.Link href="/pub" className="landing-nav-text">Publisher</Nav.Link>
        <Nav.Link href="/cont" className="landing-nav-text">Contact Us</Nav.Link>
        
      </Nav>
      </Container>
    </Navbar>
  </>
  );
};

export default LandingNavibar;