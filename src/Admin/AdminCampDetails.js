import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
//import { Button,Modal,Input } from 'react-bootstrap';
//import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Link} from 'react-router-dom';
//import { FaEye } from "react-icons/fa";
//import { FaTrashAlt } from "react-icons/fa";
//import { FaRegEdit } from "react-icons/fa";
//import Navibar from "./Navibar";
//import CampTable from "./CampTable";
import AdminCampTable from "./AdminCamptable";
import AdminNavi from "./AdminNavi";
import { AdminTable } from "./AdminTable";
//import SearchBar from "./SearchBar";
 
function AdminCampDetails() {
 
    const [show, setShow] = useState(false);
    
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div class="page-container-bg-solid page-boxed">
     <div><AdminNavi/></div>

    <div class="page-container">
        <div class="page-content-wrapper">
            <div class="page-head"><br></br>
                <div class="container-fluid"><br></br>
                    <h2 class="page-head-title" title="Campaign setting">Admin / campaigns</h2>
                    <div class="page-toolbar">  </div>
                </div><br></br>
            </div>
            <AdminCampTable />

            {/* <div class="page-content">
                <div class="container-fluid">
                    <div class="page-content-inner" id="listsCampaign">
                        <div class="portlet light">
                            <div class="portlet-title">
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>

 
    
      );
    }

    export default AdminCampDetails;