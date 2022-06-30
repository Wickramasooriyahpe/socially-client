import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import "./admin.css"
import { FiLogOut} from 'react-icons/fi';
import {FaUserCircle} from 'react-icons/fa'

const AdminNavi = () => {

  const userName = JSON.parse(localStorage.getItem('JWT'));
  const name = userName.userName;
  return (
<div>
       
  <div class="page-header" id='pageHeader'>
    <div class="page-header-top">
  
  <Navbar bg="light">
      <div class="col-6"> 
            <h5 className='header-Logo' >SOCIALLY</h5>
      </div>
      <div class="col-6">
        <div class = "row pull-right" >
            
           
            <div class="col-4 pull-right">
            <a id="logout" href="http://localhost:3001/logout" className='btn btn-info-dark'><i class="header-icon"> <FiLogOut/></i></a>
            </div>
      </div>

      </div>
  </Navbar>
  
  
</div>
    
<div class="page-header-menu">
    
    <Navbar collapseOnSelect className="color-nav" expand="sm" bg="primary" >
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/admindash'>Dashboard</Nav.Link>
                       
                        <Nav.Link href='/adminprofile'>Profile</Nav.Link>

                        <Nav.Link href='/admincamp'> Campaigns</Nav.Link>

                        <Nav.Link href='/admincreative'>Creatives</Nav.Link>

                        
                       
                    </Nav>
                </Navbar.Collapse>
                
                <div class="" id='prof'>
                <div class="col  " id='box-container'>
                <a href="http://localhost:3001/profile"><i class="header-icons-prof"><FaUserCircle/></i></a>
                <a id="userProfileSetting"  href="http://localhost:3001/profile" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
                <div id='prof-name'>{name} </div></a>
                </div>
                </div>
                
            </Container>
        </Navbar>

</div>


  </div>    
</div>
  )
}

export default AdminNavi;
