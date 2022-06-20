import React from 'react';
import {Link} from 'react-router-dom';
import Navibar from '../components/Navibar';
import { BsFillHeartFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import {GiTimeTrap} from "react-icons/gi"
//import DailyChart from "./DailyChart";
import ApexChart from "./ApexChart";


function AdminDash() {
  return (
    <div>
        <div className="page-container-bg-solid page-boxed">
            <div className="page-header">
                <div className="page-header-top">
                    <div className="container-fluid">         
                        <div className="top-menu" >
                            <ul className="nav navbar-nav pull-right">
                                <div><Navibar/></div><br></br>
                            </ul>             
                        </div>
                    </div>
                </div>
            
                <div className="page-header-menu">
                    <div className="container-fluid">
                    </div>
                </div>
            </div>
            <div className="page-container">
                <div className="page-content-wrapper">
                    <div className="page-head"><br></br>
                        <div className="container-fluid"><br></br>
                            <h2 className="page-head-title" title="Dashboard">Dashboard
                                <div><small></small></div>
                            </h2>
                            <div className="page-toolbar">
                                <div id="blockDateRange" className="form-group pull-right" data-ranges="true">
                                    <div className="input-group date-picker input-daterange" data-format="DD MM, YYYY">
                                        <div className="show-picker-trigger"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-content">
                        <div className="container-fluid">
                            <div id="BidderDashboard" className="page-content-inner" data-chart="https://dsp.adstudio.cloud/dashboard/top-chart">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="portlet">
                                            <div className="portlet-body">
                                                <div id="chartAdverts" className="chart-block">
                                                    <div className="loaded-data">
                                                       <ApexChart />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="portlet portlet-card" id="admindash">
                                            <div className="portlet-card-icon" ><GiTimeTrap /></div>
                                            <div className="portlet-body number-wins">720</div>
                                            <div className="portlet-title">Ongoing campaigns</div>
                                        </div>
                                        <div className="portlet portlet-card" id='admindash'>
                                            <div className="portlet-card-icon" ><FaEye /></div>
                                            <div className="portlet-body number-impressions">450</div>
                                            <div className="portlet-title">Ads views</div>
                                        </div>
                                        <div className="portlet portlet-card" id='admindash'>
                                            <div className="portlet-card-icon" ><FaRegMoneyBillAlt /></div>
                                            <div className="portlet-body number-clicks">$12 000</div>
                                            <div className="portlet-title">Ads spend</div>
                                        </div>
                                        <div className="portlet portlet-card" id='admindash'>
                                            <div className="portlet-card-icon" ><FaUsers /></div>
                                            <div className="portlet-body number-spend">80</div>
                                            <div className="portlet-title">Active publishers</div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default AdminDash