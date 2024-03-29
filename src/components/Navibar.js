import React from 'react';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import "./Navbar.css";
import { FiLogOut} from 'react-icons/fi';
import {FaUserCircle} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const Navibar = () => {
  const user = JSON.parse(localStorage.getItem('email'));

const balance =JSON.parse(localStorage.getItem('balance'));

const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
<div>
       
  <div class="page-header" id='pageHeader'>
    <div class="page-header-top">
  
  <Navbar bg="light">
      <div class="col-6"> 
            <h5 className='headerLogo' >SOCIALLY</h5>
      </div>
      <div class="col-6">
        <div class = "row">
            <div class="col-8">
             <a href="http://localhost:3001/pay"><div id='bal'><b>Balance: </b> LKR {balance}.00</div></a>
                </div>
           
            <div class="col-4">
            <a id="logout"
             onClick={logout}
             ><i class="header-icons"><FiLogOut/></i></a>
            </div>
      </div>

      </div>
  </Navbar>
  
  
</div>
    
<div class="page-header-menu">


    
    <Navbar collapseOnSelect className="color-nav" expand="sm" bg="primary" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/Dashboard'>Dashboard</Nav.Link>
                        <Nav.Link href='/campcrea'>Campaign</Nav.Link>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                        {/* <Nav.Link href='/pay'>Billing */}

                                    <NavDropdown title="Billing" id="basic-nav-dropdown">
          <NavDropdown.Item href='/pay' id='font'>Billing</NavDropdown.Item>
          <NavDropdown.Item href='/transactionHistory'id='font'>Transaction History</NavDropdown.Item>
        </NavDropdown>
                                   {/* </Nav.Link> */}
                        {/* <Nav.Link href='/'>Review</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                
                <div class="" id='prof'>
                <div class="col  " id='box-container'>
                <a href="http://localhost:3001/profile"><i class="header-icons-prof"><FaUserCircle/></i></a>
                <a id="userProfileSetting"  href="http://localhost:3001/profile" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
                <div id='prof-name'>{user} </div></a>
                </div>
                </div>
            </Container>
        </Navbar>

</div>


  </div>    
</div>
  )
}

export default Navibar;
