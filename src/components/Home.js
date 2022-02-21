import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import Navibar from "./Navibar";
 
function Home() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 
       <div class="container ">
           <Navibar />
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Campaign Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              
              <div class="main2">
              <ul><li><Link to="/campaign">Create Campaign</Link></li></ul>            
           </div>
             </div>
             </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Sub No.</th>
                            <th>Name </th>
                            <th>Address</th>
                            <th>City </th>
                            <th>Country </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>1</td>
                            <td>Rual Octo</td>
                            <td>Deban Steet</td>
                            <td>Newyork</td>
                            <td>USA</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="Button group example">
                        
                        <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                        <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                        </div>
                    </div> 
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Demark</td>
                            <td>City Road.13</td>
                            <td>Dubai</td>
                            <td>UAE</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Button group example">
                                   
                                    <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                                    <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                                    </div>
                                </div> 
                            </td>
                            </tr>
                         
 
                        <tr>
                            <td>3</td>
                            <td>Richa Deba</td>
                            <td>Ocol Str. 57</td>
                            <td>Berlin</td>
                            <td>Germany</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group" role="group" aria-label="Button group example">
                                
                                <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                                <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                                </div>
                            </div> 
                            </td>
                        </tr>
 
                        <tr>
                            <td>4</td>
                            <td>James Cott</td>
                            <td>Berut Road</td>
                            <td>Paris</td>
                            <td>France</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Button group example">
                                    
                                    <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                                    <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                                    </div>
                                </div> 
                            </td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Dheraj</td>
                            <td>Bulf Str. 57</td>
                            <td>Delhi</td>
                            <td>India</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Button group example">
                                    
                                    <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                                    <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                                    </div>
                                </div>  
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>6</td>
                            <td>Maria James</td>
                            <td>Obere Str. 57</td>
                            <td>Tokyo</td>
                            <td>Japan</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Button group example">
                                    
                                    <button className="btn btn-outline-danger btn-sm"><FaTrashAlt /></button>
                                    <button className="btn btn-outline-primary btn-sm"><Link to="/edit" ><FaRegEdit /></Link></button>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>  
        </div>    
      </div>
      );
    }

    export default Home;